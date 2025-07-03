export const sirketRoutes = [
  {
    id: 1,
    name: "Hakkımızda",
    path: "/sirket/hakkimizda",
  },
  {
    id: 2,
    name: "Ekibimiz",
    path: "/sirket/ekibimiz",
  },
  {
    id: 3,
    name: "Ödeme ve Fatura Bilgileri",
    path: "/sirket/odeme-ve-fatura-bilgileri",
  },  
];

const getSirket = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sirketRoutes);
    }, 100);
  });
};

export default getSirket;