import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase.config";

export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabase.from("site").select("*").eq("id", process.env.SUPABASE_SITE_UUID).single();
    if (error) {
      throw error;
    }
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}