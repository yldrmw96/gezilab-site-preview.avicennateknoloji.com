import { getStringCatalogCookie } from "@lib/string-catalog-cookies";

interface ServerLocalizedTextProps {
  stringKey: string;
  langCode?: string;
  fallback?: string;
}

export default async function ServerLocalizedText({
  stringKey,
  langCode = "tr",
  fallback = "Text not found"
}: ServerLocalizedTextProps) {
  try {
    const stringCatalog = await getStringCatalogCookie();

    if (!stringCatalog) {
      return <span>{fallback}</span>;
    }

    // String catalog'da key'i ara
    const foundItem = stringCatalog.find((item: any) =>
      Object.keys(item).includes(stringKey)
    );

    if (foundItem && foundItem[stringKey] && foundItem[stringKey][langCode]) {
      return <span>{foundItem[stringKey][langCode]}</span>;
    }

    // Fallback olarak Türkçe'yi dene
    if (foundItem && foundItem[stringKey] && foundItem[stringKey]["tr"]) {
      return <span>{foundItem[stringKey]["tr"]}</span>;
    }

    return <span>{fallback}</span>;
  } catch (error) {
    console.error("ServerLocalizedText hatası:", error);
    return <span>{fallback}</span>;
  }
} 