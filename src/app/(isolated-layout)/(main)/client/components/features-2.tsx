import React from 'react';
import Text from '@/components/text';
import { PlaneIcon, StampIcon, BedIcon, TruckIcon, ShipIcon, PresentationIcon, CarIcon, StarIcon } from 'lucide-react';
import styles from "@/styles/safearea.module.css";



const features = [
  {
    icon: PlaneIcon,
    title: "Uçak Bileti",
    text: "Yurt içi ve yurt dışı uçak biletlerinizi en uygun fiyatlarla planlıyoruz."
  },
  {
    icon: StampIcon,
    title: "Vize",
    text: "Vize başvurularınızı profesyonelce yönetiyor, zaman kaybını önlüyoruz."
  },
  {
    icon: BedIcon,
    title: "Otel Rezervasyonu",
    text: "İş seyahatlerinize uygun konforlu otellerde en iyi fiyat garantisiyle konaklayın."
  },
  {
    icon: CarIcon,
    title: "Araç Kiralama / Transfer",
    text: "Şehir içi ve havalimanı transferlerinizi güvenli ve zamanında gerçekleştiriyoruz."
  },
  {
    icon: CarIcon,
    title: "Şoförlü Lüks Araç Kiralama",
    text: "Prestijinizi yansıtan, konforlu ve şoförlü araç hizmetleri."
  },
  {
    icon: StarIcon,
    title: "Turizm",
    text: "İş seyahatlerinize kültürel ve turistik deneyimler de katın."
  },
  {
    icon: TruckIcon,
    title: "Lojistik",
    text: "Seyahatlerinizle entegre lojistik çözümleri sunuyoruz."
  },
  {
    icon: ShipIcon,
    title: "Yat Kiralama",
    text: "Özel davetler ve premium deneyimler için yat kiralama hizmeti."
  },
  {
    icon: PresentationIcon,
    title: "MICE",
    text: "Toplantı, teşvik gezisi, kongre ve etkinlik organizasyonlarını profesyonelce yürütüyoruz."
  },
];

const Features2 = () => {
  return (
    <div className={styles.safe_area}>
      <div className="flex flex-col gap-4 items-center mb-10">
        <Text variant="handwriting">Hizmetlerimiz</Text>
        <Text variant="heading">Kurumsal Seyahat Hizmetleri</Text>
        <Text variant="paragraph">
          Kurumsal seyahat hizmetleri kapsamında şirketinizin uçak bileti, vize, otel, araç ve transfer işlemleri için hizmetinizdeyiz.
        </Text>
      </div>
      <div className="divide-y divide-gray-200 [&>div]:p-4 divide-dashed divide-x grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 gap-6">
        {features.map((feature, index) => (
          <div className="flex flex-col gap-4 items-center text-center" key={index}>
            <div className="text-primary border rounded-md p-4 text-2xl">
              <feature.icon width={"1em"} height={"1em"} />
            </div>
            <h3 className="text-lg font-bold">{feature.title}</h3>
            <p className="opacity-80 text-sm">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features2;
