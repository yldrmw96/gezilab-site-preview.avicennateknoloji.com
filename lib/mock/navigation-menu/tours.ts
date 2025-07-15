export const tours = [
  {
    id: 1,
    image: "/img/trip/tour_1_1.jpg",
    location: "Madrid, İspanya",
    title: "Brooklyn Plaj Tatili Turu",
    duration: "10 Gün",
    participants: "50+",
    price: "$250",
    link: "tour-details.html",
  },
  {
    id: 2,
    image: "/img/trip/tour_1_2.jpg",
    location: "Chumphon, Tayland",
    title: "Pak Chumphon Şehir Turu",
    duration: "12 Gün",
    participants: "70+",
    price: "$450",
    link: "tour-details.html",
  },
  {
    id: 3,
    image: "/img/trip/tour_1_3.jpg",
    location: "Las Vegas, ABD",
    title: "Bali Macera Turu",
    duration: "7 Gün",
    participants: "52+",
    price: "$350",
    link: "tour-details.html",
  },
  {
    id: 4,
    image: "/img/trip/tour_1_4.jpg",
    location: "Barselona, İspanya",
    title: "Kasım Ayı Tatil Rotaları",
    duration: "13 Gün",
    participants: "100+",
    price: "$550",
    link: "tour-details.html",
  },
  {
    id: 5,
    image: "/img/trip/tour_1_5.jpg",
    location: "Las Vegas, ABD",
    title: "Brooklyn Noel Işıkları",
    duration: "15 Gün",
    participants: "312+",
    price: "$600",
    link: "tour-details.html",
  },
];

const getTours = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tours);
    }, 100);
  });
};

export default getTours;