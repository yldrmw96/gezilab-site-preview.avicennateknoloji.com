import { StringCatalogResponseItem } from "@/types/string-catalog-response-item";


// expected result:
// {
//   "tr": [
//     "contact_us:  "Bize Ulaşın"
//     
//   ]
// }

function rearrangeStringCatalog(data: StringCatalogResponseItem[]) {
  return data.reduce<Record<string, Record<string, string[]>>>((acc, item) => {
    const lang = item.lang_code;
    const key = item.key.replace(/-/g, '_');

    if (!acc[lang]) acc[lang] = {};
    if (!acc[lang][key]) acc[lang][key] = [];
    acc[lang][key].push(item.content);

    return acc;
  }, {});
}

export { rearrangeStringCatalog };