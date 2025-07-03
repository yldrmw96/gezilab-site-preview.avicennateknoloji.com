import { Route } from "./routes.d";

export const routes: Route[] = [
  
 

  {
    name: "Bize Ulaşın",
    children: [
      {
        name: "İletişim",
        path: "/bize-ulasin/iletisim",
      },
      {
        name: "Kurumsal Teklif Al",
        path: "/bize-ulasin/kurumsal-teklif-al",
      },
      {
        name: "Acentelik Başvurusu",
        path: "/bize-ulasin/acentelik-basvurusu",
      },  
      {
        name: "İş Başvurusu",
        path: "/bize-ulasin/is-basvurusu",
      },
    ],
  },
]