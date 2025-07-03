import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/db_connection";
import { rearrangeStringCatalog } from "@/lib/rearrange-string-catalog";

export async function POST(request: NextRequest) {
  try {
    const { lang_code, site_id } = await request.json();

    if (!site_id) {
      return NextResponse.json(
        { error: "Site id is required" },
        { status: 400 }
      );
    }

    const pool = await getPool();
    let rows: any[];

    if (!lang_code) {
      const query = `
        SELECT 
          sk.id as key_id,
          sc.id as content_id,
          sc.content as content,
          sc.lang_code as lang_code,
          cg.id as group_id,
          cg.label as group_label,
          cg.site_id as site_id,
          sk.key as \`key\`
        FROM string_keys sk
        LEFT JOIN string_catalog sc 
          ON sk.id = sc.key_id
        LEFT JOIN content_groups cg 
          ON sc.group_id = cg.id
        WHERE cg.site_id = ?
      `;
      [rows] = await pool.query(query, [site_id]);
    } else {
      const query = `
        SELECT 
          sk.id as key_id,
          sc.id as content_id,
          sc.content as content,
          sc.lang_code as lang_code,
          cg.id as group_id,
          cg.label as group_label,
          cg.site_id as site_id,
          sk.key as \`key\`
        FROM string_keys sk
        LEFT JOIN string_catalog sc 
          ON sk.id = sc.key_id
        LEFT JOIN content_groups cg 
          ON sc.group_id = cg.id
        WHERE cg.site_id = ? 
          AND sc.lang_code = ?
      `;
      [rows] = await pool.query(query, [site_id, lang_code]);
    }

    // Veriyi grupluyoruz:
    const grouped = rearrangeStringCatalog(rows);

    // **Doğru**: NextResponse üzerinden çerez set edelim
    const res = NextResponse.json(grouped);
    res.cookies.set("stringCatalog", JSON.stringify(grouped), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30, // 30 gün
      path: "/",                 // tüm site için geçerli
      // secure: true,            // prod’da HTTPS için ekleyin
      // sameSite: 'lax',
    });

    res.cookies.set("lang_code", lang_code ?? "tr");

    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
