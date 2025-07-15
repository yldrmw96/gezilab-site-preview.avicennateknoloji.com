import { links } from "@lib/links";

export const visas = [
  {
    id: 1,
    name: "Dubai Turistik Vize",
    slug: "dubai-turistik-vize",
    image: "/img/visas/portrait-woman-visiting-luxurious-city-dubai_23-2151328510.jpg",
    path: links.visa("dubai-turistik-vize"),
  },
  {
    id: 2,
    name: "Rusya Turistik Vize",
    slug: "rusya-turistik-vize",
    image: "/img/visas/portrait-woman-visiting-luxurious-city-dubai_23-2151328510.jpg",
    path: links.visa("rusya-turistik-vize"),
  },
  {
    id: 3,
    name: "Rusya E Vize",
    slug: "rusya-e-vize",
    image: "/img/visas/portrait-woman-visiting-luxurious-city-dubai_23-2151328510.jpg",
    path: links.visa("rusya-e-vize"),
  },
  {
    id: 4,
    name: "İngiltere Vizesi",
    slug: "ingiltere-vizesi",
    image: "/img/visas/portrait-woman-visiting-luxurious-city-dubai_23-2151328510.jpg",
    path: links.visa("ingiltere-vizesi"),
  },
  {
    id: 5,
    name: "Fransa Vizesi",
    slug: "fransa-vizesi",
    image: "/img/visas/portrait-woman-visiting-luxurious-city-dubai_23-2151328510.jpg",
    path: links.visa("fransa-vizesi"),
  },
  {
    id: 6,
    name: "Schengen Ülkeleri",
    slug: "schengen-ululeri",
    image: "/img/visas/portrait-woman-visiting-luxurious-city-dubai_23-2151328510.jpg",
    path: links.visa("schengen-ululeri"),
  },
];

export const getCountries = async (): Promise<typeof allCountries> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allCountries);
    }, 100);
  });
};

export const allCountries = [
  {
    id: 1,
    slug: "bati-avrupa",
    name: "Batı Avrupa Ülkeleri",
  },
  {
    id: 2,
    slug: "dogu-avrupa",
    name: "Doğu Avrupa Ülkeleri",
  },
  {
    id: 3,
    slug: "guney-avrupa",
    name: "Güney Avrupa Ülkeleri",
  },
  {
    id: 4,
    slug: "kuzey-avrupa",
    name: "Kuzey Avrupa Ülkeleri",
  },
  {
    id: 5,
    slug: "afrika",
    name: "Afrika Ülkeleri",
  },
  {
    id: 6,
    slug: "guney-amerika",
    name: "Güney Amerika Ülkeleri",
  },
  {
    id: 7,
    slug: "okyanusya-avustralya",
    name: "Okyanusya (Avustralya) Ülkeleri",
  },
  {
    id: 8,
    slug: "vizesiz-gidilebilen",
    name: "Vizesiz Gidilebilen Ülkeler",
  },
];

export const getVisas = async (): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(visas);
    }, 100);
  });
};

export const getVisaBySlug = async (slug: string): Promise<any> => {
  const visas = await getVisas();
  if (visas) {
    return visas.find((vize: any) => vize.slug === slug);
  }
  return null;
};

export const getCountryBySlug = async (slug: string): Promise<any> => {
  const allCountries = await getCountries();
  if (allCountries) {
    return allCountries.find((country: any) => country.slug === slug);
  }
  return null;
};

export default getVisas;
