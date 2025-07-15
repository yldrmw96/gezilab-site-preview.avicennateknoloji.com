import { getStrCatalogOnce } from "@/lib/getStrCatalogOnce";
import { getLanguages } from "@/lib/getLanguages";
import SidebarClient from "./client";

export default async function DefaultSidebar() {
  try {
    const stringCatalog = await getStrCatalogOnce();
    const languages = await getLanguages();
    if (stringCatalog) {
      return <SidebarClient stringCatalogFromServer={stringCatalog} languages={languages} />;
    } else {
      return <SidebarClient stringCatalogFromServer={null} languages={languages} />;
    }
  } catch (error) {
    console.error("DefaultSidebar hatası:", error);
    return <div>Error</div>;
  }
}
