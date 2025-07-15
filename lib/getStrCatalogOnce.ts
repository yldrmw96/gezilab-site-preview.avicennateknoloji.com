// lib/getTranslations.ts
import { cache } from "react";
import { supabase } from "@lib/supabase.config";

export const getStrCatalogOnce = cache(async () => {
  const { data, error } = await supabase.rpc("get_translations_by_site", {
    site_uuid: "30b69086-d382-4f56-8b03-618561af4c1f"
  });

  // console.log("getStrCatalogOnce: Data received, length:", data.length);
  // console.log("getStrCatalogOnce: Data:", data);
  if (error) throw new Error(error.message);
  return data;
});
