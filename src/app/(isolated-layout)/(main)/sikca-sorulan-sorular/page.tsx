

import { getStrCatalogOnce } from "@/lib/getStrCatalogOnce";
import SikcaSorulanSorularClient from "./client";

export default async function SikcaSorulanSorularPage() {
  const stringCatalog = await getStrCatalogOnce();
  return (
    <SikcaSorulanSorularClient stringCatalog={stringCatalog} />
  );
} 
