import { getStringCatalogCookie } from "@/lib/string-catalog-cookies";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";

async function fetchStringCatalogFromSupabase(): Promise<any | null> {
  try {
    console.log("Server-side: Fetching from Supabase as fallback");
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.rpc("get_translations");

    if (error) {
      console.error("Server-side Supabase hatası:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Server-side fetch hatası:", error);
    return null;
  }
}

export async function getServerLocalizedString(
  stringKey: string,
  langCode: string = "tr",
  fallback: string = "Text not found"
): Promise<string> {
  try {
    let stringCatalog = await getStringCatalogCookie();

    // Cookie'de yoksa Supabase'dan çek
    if (!stringCatalog) {
      stringCatalog = await fetchStringCatalogFromSupabase();
    }

    if (!stringCatalog) {
      return fallback;
    }

    // String catalog'da key'i ara
    const foundItem = stringCatalog.find((item: any) => Object.keys(item).includes(stringKey));

    if (foundItem && foundItem[stringKey] && foundItem[stringKey][langCode]) {
      return foundItem[stringKey][langCode];
    }

    // Fallback olarak Türkçe'yi dene
    if (foundItem && foundItem[stringKey] && foundItem[stringKey]["tr"]) {
      return foundItem[stringKey]["tr"];
    }

    return fallback;
  } catch (error) {
    console.error("getServerLocalizedString hatası:", error);
    return fallback;
  }
}

export async function getAllServerLocalizedStrings(): Promise<any | null> {
  try {
    let stringCatalog = await getStringCatalogCookie();

    // Cookie'de yoksa Supabase'dan çek
    if (!stringCatalog) {
      stringCatalog = await fetchStringCatalogFromSupabase();
    }

    return stringCatalog;
  } catch (error) {
    console.error("getAllServerLocalizedStrings hatası:", error);
    return null;
  }
}
