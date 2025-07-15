import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase.config";

export async function GET() {
  // Call the database function we created
  const { data, error } = await supabase.rpc("get_translations_by_site", {
    site_uuid: "30b69086-d382-4f56-8b03-618561af4c1f",
  });

  if (error) {
    // console.error('Error fetching translations:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // The data will already be in the format you need
  return NextResponse.json(data);
}
