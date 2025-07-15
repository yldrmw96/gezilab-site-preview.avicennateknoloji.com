"use client";
import { useLanguage } from "@store/hooks/language.hook";
import { getTranslationFromCatalog } from "@lib/flatten-string-catalog";

/**
 * Expected data structure (both formats supported):
 *
 * NEW FORMAT:
 * {
 *   "_root": {
 *     "nav": {
 *       "translations": [
 *         { "about": { "tr": "Hakkımızda", "en": "About" } }
 *       ]
 *     }
 *   }
 * }
 *
 * OLD FORMAT (backward compatibility):
 * [{"quick_visa":{"en":"Quick Visa","tr":"Hızlı Vize Al"}}]
 */

export function useLocalizedStringAlternate(
  data: any,
  key: string,
  contentPath?: string | string[]
) {
  const {
    values: { language },
  } = useLanguage();

  // Eğer data null veya undefined ise fallback döndür
  if (!data) {
    return key; // Key'in kendisini fallback olarak döndür
  }

  // Yeni utility fonksiyonunu kullan - nested path ile
  return getTranslationFromCatalog(data, key, language.code, key, contentPath);
}
