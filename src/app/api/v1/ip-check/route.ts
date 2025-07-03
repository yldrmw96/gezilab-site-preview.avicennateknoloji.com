import { getPool } from "@/lib/db_connection";
import { RowDataPacket } from "mysql2";
import { NextRequest, NextResponse } from "next/server";

enum SiteStatus {
  RUNNING = "running",
  MAINTENANCE = "maintenance",
}

export async function POST(request: NextRequest) {
  try {
    const { ip } = await request.json();
    const siteStatus = await getSiteStatus();
    if (!siteStatus) {
      throw new Error("Site status not found");
    }
    const response = await checkIpIsAllowedInDb(ip, siteStatus);
    console.log(siteStatus);
    return NextResponse.json({
      status: "ok",
      data: response,
      message: "IP is allowed",
    });
  } catch (error) {
    return NextResponse.json({ status: "error", message: "IP is not allowed" }, { status: 403 });
  }
}
async function checkIpIsAllowedInDb(ip: string, siteStatus: SiteStatus) {
  const pool = await getPool();
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT in_safelist, is_blocked FROM dev WHERE ip = ?",
    [ip]
  );
  const hasRow = rows.length > 0;
  const ipInSafelist = hasRow && rows[0].in_safelist === 1;
  const ipIsBlocked = hasRow && rows[0].is_blocked === 1;

  // 1) Öncelikli: blokluysa hemen engelle
  if (ipIsBlocked) {
    return { isAllowed: false, reason: "ip_blocked" };
  }
  // 2) Safelist’teyse her durumda izin ver
  if (ipInSafelist) {
    return { isAllowed: true, reason: "ip_allowed_safelisted" };
  }
  // 3) Site bakım modundaysa, safelist’te olmayanları engelle
  if (siteStatus === SiteStatus.MAINTENANCE) {
    return { isAllowed: false, reason: "site_maintenance" };
  }
  // 4) Geriye “site çalışıyor, IP bloklu değil, safelist’te de değil” durumu kaldı
  return { isAllowed: true, reason: "site_running" };
}


async function getSiteStatus() {
  try {
    const pool = await getPool();
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT s.status FROM sites s WHERE id = ?`,
      [process.env.NEXT_PUBLIC_SITE_ID]);
    return rows[0].status as SiteStatus;
  } catch (error) {
    return null;
  }
}