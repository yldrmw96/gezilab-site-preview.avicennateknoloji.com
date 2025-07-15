import Image from 'next/image';
import React from 'react';
import styles from "@styles/safearea.module.css";
const features = [
  {
    "icon": "feature_1_1.svg",
    "title": "Bol İndirim",
    "text": "Magnetik ilişkilerle uğraşmadan, modern bir seyahat deneyimi sunarız. Uygun fiyatlarla dolu bir dünya sizi bekliyor."
  },
  {
    "icon": "feature_1_2.svg",
    "title": "En İyi Rehberler",
    "text": "Alanında uzman rehberlerle gezileriniz artık çok daha keyifli ve bilgilendirici olacak."
  },
  {
    "icon": "feature_1_3.svg",
    "title": "7/24 Destek",
    "text": "Seyahatinizin her anında yanınızdayız. Günün her saati destek alabilirsiniz."
  },
  {
    "icon": "feature_1_4.svg",
    "title": "Seyahat Yönetimi",
    "text": "Uçuş, konaklama ve tüm planlamalar tek yerden, zahmetsizce yönetilsin."
  }
]


const Features = () => {
  return (
    <div className={styles.safe_area}>
      <div className="grid grid-cols-4 py-10 gap-4">

          {features.map((feature, index) => (
            <div className="col-xl-3 col-md-6" key={index}>
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="flex items-center justify-center gap-4 text-center">
                  <Image width={100} height={100} src={`/img/icon/${feature.icon}`} alt="icon" />
                </div>
                <h3 className="text-lg font-bold text-center">{feature.title}</h3>
                <p className="text-center">{feature.text}</p>
              </div>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default Features;
