export const kurumsalSeyahatRoutes = [
  {
    name: "Uçak Bileti",
    path: "/kurumsal-seyahat/ucak-bileti",
  },
  {
    name: "Vize",
    path: "/kurumsal-seyahat/vize",
  },
  {
    name: "Otel Rezervasyonu",
    path: "/kurumsal-seyahat/otel-rezervasyonu",
  },
  {
    name: "Araç Kiralama / Transfer",
    path: "/kurumsal-seyahat/arac-kiralama-transfer",
  },
  {
    name: "Şoförlü Lüks Araç Kiralama",
    path: "/kurumsal-seyahat/soforlu-luks-arac-kiralama",
  },
  {
    name: "Turizm",
    path: "/kurumsal-seyahat/turizm",
  },
  {
    name: "Lojistik",
    path: "/kurumsal-seyahat/lojistik",
  },
  {
    name: "Yat Kiralama",
    path: "/kurumsal-seyahat/yat-kiralama",
  },
  {
    name: "MICE",
    path: "/kurumsal-seyahat/mice",
  },
];

const getKurumsalSeyahat = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(kurumsalSeyahatRoutes);
    }, 100);
  });
};

export default getKurumsalSeyahat;