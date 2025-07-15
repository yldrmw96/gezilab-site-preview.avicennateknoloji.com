const STRING_CATALOG_KEY = "string-catalog";

export function setStringCatalogSession(data: any): boolean {
  try {
    if (typeof window === "undefined") {
      console.warn("Session storage not available on server side");
      return false;
    }

    const serializedData = JSON.stringify(data);
    sessionStorage.setItem(STRING_CATALOG_KEY, serializedData);
    console.log("Session storage: Data saved, size:", serializedData.length, "bytes");
    return true;
  } catch (error) {
    console.error("Session storage save error:", error);
    return false;
  }
}

export function getStringCatalogSession(): any | null {
  try {
    if (typeof window === "undefined") {
      return null;
    }

    const data = sessionStorage.getItem(STRING_CATALOG_KEY);
    if (!data) {
      console.log("Session storage: No data found");
      return null;
    }

    console.log("Session storage: Data found, size:", data.length, "bytes");
    return JSON.parse(data);
  } catch (error) {
    console.error("Session storage read error:", error);
    return null;
  }
}

export function hasStringCatalogSession(): boolean {
  try {
    if (typeof window === "undefined") {
      return false;
    }

    return sessionStorage.getItem(STRING_CATALOG_KEY) !== null;
  } catch (error) {
    console.error("Session storage check error:", error);
    return false;
  }
}

export function clearStringCatalogSession(): boolean {
  try {
    if (typeof window === "undefined") {
      return false;
    }

    sessionStorage.removeItem(STRING_CATALOG_KEY);
    console.log("Session storage: Data cleared");
    return true;
  } catch (error) {
    console.error("Session storage clear error:", error);
    return false;
  }
}
