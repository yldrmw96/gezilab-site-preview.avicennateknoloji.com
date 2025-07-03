"use client"
import { useLanguage } from "@/store/hooks/language.hook";

export function localizedString(data: any, key: string) {
  const { values: { language } } = useLanguage();

  const containsLanguage = Object.keys(data).includes(language.code);
  if (containsLanguage) {


    if (Array.isArray(data[language.code]) && data[language.code][key].length > 0) {
      return data[language.code][key][0];
    }
    return data[language.code][key];
  }
  return data["tr"][key];
}