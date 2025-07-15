import { NextResponse } from "next/server";
import { getPool } from "@/lib/db_connection";

export async function GET() {
  try {
    const pool = await getPool();
    const [rows] = await pool.query("SELECT 1");
    return NextResponse.json({ status: "ok", rows });
  } catch (error) {
    return NextResponse.json(
      { status: "error", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
