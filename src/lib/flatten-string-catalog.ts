/**
 * Nested string catalog yapısını düz array'e çevirir
 * 
 * Input:
 * {
 *   "_root": {
 *     "nav": {
 *       "translations": [
 *         { "about": { "tr": "Hakkımızda", "en": "About" } },
 *         { "tours": { "tr": "Turlar", "en": "Tours" } }
 *       ]
 *     }
 *   }
 * }
 * 
 * Output:
 * [
 *   { "about": { "tr": "Hakkımızda", "en": "About" } },
 *   { "tours": { "tr": "Turlar", "en": "Tours" } }
 * ]
 */
export function flattenStringCatalog(nestedData: any): any[] {
  try {
    if (!nestedData) {
      // console.warn("flattenStringCatalog: No data provided");
      return [];
    }

    // Nested yapıyı kontrol et
    if (nestedData._root && nestedData._root.nav && nestedData._root.nav.translations) {
      // console.log("flattenStringCatalog: Found nested structure, flattening...");
      return nestedData._root.nav.translations;
    }

    // Eğer zaten array ise direkt döndür (backward compatibility)
    if (Array.isArray(nestedData)) {
      // console.log("flattenStringCatalog: Data is already flat array");
      return nestedData;
    }

    // Diğer nested yapıları da kontrol et
    if (typeof nestedData === 'object') {
      // _root altındaki tüm content group'ları topla
      const allTranslations: any[] = [];
      
      if (nestedData._root) {
        Object.keys(nestedData._root).forEach(groupKey => {
          const group = nestedData._root[groupKey];
          if (group && group.translations && Array.isArray(group.translations)) {
            allTranslations.push(...group.translations);
          }
        });
      }
      
      if (allTranslations.length > 0) {
        // console.log("flattenStringCatalog: Found multiple content groups, merged", allTranslations.length, "translations");
        return allTranslations;
      }
    }

    // console.warn("flattenStringCatalog: Unknown data structure, returning empty array");
    return [];
  } catch (error) {
    // console.error("flattenStringCatalog error:", error);
    return [];
  }
}

/**
 * Nested path'e göre translations alır
 * @param catalog - Ana veri
 * @param path - "_root/nav" veya "_root/nav/item/title" formatında
 */
export function getNestedTranslations(catalog: any, path: string | string[]): any[] {
  try {
    if (!catalog) {
      return [];
    }

    let current = catalog;
    let pathArray: string[];
    
    if (typeof path === 'string') {
      // "_root/nav" formatından path array'i çıkar
      pathArray = path.split('/');
    } else {
      pathArray = path;
    }
    
    // Path boyunca ilerle
    for (const segment of pathArray) {
      if (!current[segment]) {
        // console.warn(`getNestedTranslations: Path segment '${segment}' not found`);
        return [];
      }
      current = current[segment];
    }
    
    // Son seviyede translations var mı kontrol et
    if (current && current.translations && Array.isArray(current.translations)) {
      return current.translations;
    }
    
    // console.warn("getNestedTranslations: No translations found at path:", path);
    return [];
  } catch (error) {
    // console.error("getNestedTranslations error:", error);
    return [];
  }
}

/**
 * String catalog'dan belirli bir key'in çevirisini alır
 */
export function getTranslationFromCatalog(
  catalog: any, 
  key: string, 
  langCode: string = "tr", 
  fallback?: string,
  contentPath?: string | string[]
): string {
  try {
    // console.log("getTranslationFromCatalog:", { key, langCode, contentPath, catalogKeys: catalog ? Object.keys(catalog) : 'null' });
    
    let flatData: any[];
    
    if (contentPath) {
      // Nested path kullan
      flatData = getNestedTranslations(catalog, contentPath);
      // console.log("getTranslationFromCatalog: Using nested path:", contentPath, "Found translations:", flatData.length);
    } else {
      // Default olarak nav kullan
      flatData = flattenStringCatalog(catalog);
      // console.log("getTranslationFromCatalog: Using default flatten, found translations:", flatData.length);
    }
    
    // Key'i içeren item'ı bul
    const foundItem = flatData.find((item: any) => Object.keys(item).includes(key));
    
    if (!foundItem) {
      // console.log("getTranslationFromCatalog: Key not found:", key);
      return fallback || key;
    }
    
    // console.log("getTranslationFromCatalog: Found item for key:", key, foundItem[key]);
    
    // Dil kodunu kontrol et ve döndür
    if (foundItem[key] && foundItem[key][langCode]) {
      // console.log("getTranslationFromCatalog: Returning translation:", foundItem[key][langCode]);
      return foundItem[key][langCode];
    } else {
      const trText = foundItem[key]?.["tr"] || fallback || key;
      // console.log("getTranslationFromCatalog: Returning fallback:", trText);
      return trText;
    }
  } catch (error) {
    // console.error("getTranslationFromCatalog error:", error);
    return fallback || key;
  }
} 