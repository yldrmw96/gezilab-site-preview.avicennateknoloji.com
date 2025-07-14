import { cookies } from "next/headers";

const STRING_CATALOG_COOKIE_NAME = "string-catalog";

export async function getStringCatalogCookie(): Promise<any | null> {
  try {
    const cookieStore = await cookies();
    const cookieValue = cookieStore.get(STRING_CATALOG_COOKIE_NAME);
    
    if (!cookieValue?.value) {
      return null;
    }
    
    return JSON.parse(cookieValue.value);
  } catch (error) {
    // console.error("String catalog cookie okuma hatası:", error);
    return null;
  }
}

export async function hasStringCatalogCookie(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const cookieValue = cookieStore.get(STRING_CATALOG_COOKIE_NAME);
    return !!cookieValue?.value;
  } catch (error) {
    // console.error("String catalog cookie kontrol hatası:", error);
    return false;
  }
} 