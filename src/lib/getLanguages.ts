// lib/getTranslations.ts
import { cache } from "react";
import { supabase } from "@/lib/supabase.config";

export const getLanguages = cache(async () => {
  const { data, error } = await supabase.from("language").select("*");

  // console.log("getLanguages: Data:", data);

  if (error) throw new Error(error.message);
  return data;
});
