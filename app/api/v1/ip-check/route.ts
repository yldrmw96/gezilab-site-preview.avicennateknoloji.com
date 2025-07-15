import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

enum SiteStatus {
  RUNNING = "RUNNING",
  MAINTENANCE = "MAINTENANCE",
}

enum AccessStatus {
  ALLOWED = "ALLOWED",
  SAFELIST = "SAFELIST",
  BLOCKED = "BLOCKED",
}

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: NextRequest) {
  try {
    const { ip } = await request.json();
    const siteStatus = await getSiteStatus();
    if (!siteStatus) {
      throw new Error("Site status not found");
    }
    const response = await checkIpIsAllowedInDb(ip, siteStatus);

    return NextResponse.json({
      status: "ok",
      data: response,
      message: "IP is allowed",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "IP is not allowed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 403 }
    );
  }
}

async function checkIpIsAllowedInDb(ip: string, siteStatus: SiteStatus) {
  // Query the ip_acl table for the given IP
  const { data: ipData, error } = await supabase
    .from("ip_acl")
    .select("status")
    .eq("ip_address", ip)
    .single();
  console.log("ipData", ipData);
  if (error && error.code !== "PGRST116") {
    // PGRST116 is "no rows returned" error
    console.error("Error checking IP:", error);
  }

  // Check if IP exists in the database
  const hasRow = ipData !== null;
  const ipStatus = hasRow ? ipData.status : null;

  // 1) Öncelikli: blokluysa hemen engelle (If blocked, deny immediately)
  if (ipStatus === AccessStatus.BLOCKED) {
    return { isAllowed: false, reason: "ip_blocked" };
  }

  // 2) Safelist'teyse her durumda izin ver (If in safelist, always allow)
  if (ipStatus === AccessStatus.SAFELIST) {
    return { isAllowed: true, reason: "ip_allowed_safelisted" };
  }

  // 3) Site bakım modundaysa, safelist'te olmayanları engelle
  // (If site is in maintenance mode, block IPs not in safelist)
  if (siteStatus === SiteStatus.MAINTENANCE) {
    return { isAllowed: false, reason: "site_maintenance" };
  }

  // 4) Geriye "site çalışıyor, IP bloklu değil, safelist'te de değil" durumu kaldı
  // (Site is running, IP is not blocked, and not in safelist)
  return { isAllowed: true, reason: "site_running" };
}

async function getSiteStatus() {
  const siteId = process.env.SITE_UUID;

  const { data, error } = await supabase.from("site").select("status").eq("id", siteId).single();

  if (error) {
    console.error("Error fetching site status:", error);
    return null;
  }

  return data.status as SiteStatus;
}
