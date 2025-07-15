import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@lib/supabase/server";

export async function POST() {
  try {
    // Supabase'dan veri çek
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.rpc("get_translations");

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: error,
        },
        { status: 500 }
      );
    }
    return NextResponse.json({
      success: true,
      data: data,
      source: "supabase",
    });
  } catch (error) {
    console.error("String catalog POST hatası:", error);
    return NextResponse.json(
      {
        success: false,
        error: error,
      },
      { status: 500 }
    );
  }
}
