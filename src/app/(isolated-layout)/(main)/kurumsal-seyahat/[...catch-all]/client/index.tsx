"use client";

import { cn } from "@/lib/utils";
import layoutStyles from "@/styles/layout.module.css";
import safeArea from "@/styles/safearea.module.css";
import Text from "@/components/text";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PlaneIcon,
  StampIcon,
  BedIcon,
  CarIcon,
  TruckIcon,
  ShipIcon,
  PresentationIcon,
  StarIcon,
  CheckIcon,
  ClockIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  UsersIcon,
  AwardIcon,
  HeadphonesIcon,
  ShieldCheckIcon
} from "lucide-react";
import { kurumsalSeyahatRoutes } from "@/lib/mock/navigation-menu/kurumsal-seyahat";
import Link from "next/link";
import { notFound } from "next/navigation";

interface KurumsalSeyahatPageProps {
  params: {
    "catch-all": string[];
  };
}

// Hizmet detayları
const serviceDetails = {
  "ucak-bileti": {
    title: "Uçak Bileti",
    icon: PlaneIcon,
    description: "Yurt içi ve yurt dışı uçak biletlerinizi en uygun fiyatlarla planlıyoruz.",
    content: {
      intro: "IATA: 8821505-0 işletme belgesi sahibi olan şirketimiz Gezilab, 140'dan fazla ülkede 270'in üzerinde uluslararası tarifeli uçuş düzenleyen havayolunun bilet işlemlerini yapabilme yetkisine sahip bir acentedir. Ayrıca şirketimiz, Türk Hava Yolları, Pegasus ve Sun Express'in de yetkili satış acentesidir.",
      features: [
        "IATA yetkili satış acentesi",
        "140+ ülkede uçuş imkanı",
        "270+ havayolu ile çalışma",
        "THY, Pegasus, Sun Express yetkili bayi",
        "Charter uçuş seçenekleri",
        "Kurumsal anlaşmalar",
        "7/24 satış ve sonrası hizmet",
        "Fiyat takibi ve bilgilendirme"
      ],
      whyChoose: [
        "24 yılı aşkın turizm tecrübesi",
        "Deneyimli kadro ile profesyonel hizmet",
        "En doğru ve en iyi fiyatlı bilet bulma",
        "İptal/iade, değişiklik işlemleri",
        "Grup rezervasyonu ve biletleme",
        "Corporate anlaşma takibi",
        "Havayolu değişikliklerinde anında bilgilendirme"
      ]
    }
  },
  "vize": {
    title: "Vize",
    icon: StampIcon,
    description: "Vize başvurularınızı profesyonelce yönetiyor, zaman kaybını önlüyoruz.",
    content: {
      intro: "Dünya genelindeki vize işlemlerinizi hızlı, güvenilir ve sorunsuz bir şekilde gerçekleştiriyoruz. Deneyimli ekibimizle tüm süreçleri yakından takip ediyor, müşterilerimizin vize alma sürecini kolaylaştırıyoruz.",
      features: [
        "Schengen ülkeleri vize işlemleri",
        "ABD, İngiltere, Kanada vize başvuruları",
        "Rusya ve Asya ülkeleri vize hizmetleri",
        "Turistik ve iş vizesi danışmanlığı",
        "Randevu alma ve takip hizmeti",
        "Evrak hazırlama desteği",
        "Hızlı vize işlemleri (acil durumlarda)",
        "Vize reddi durumunda destek"
      ],
      whyChoose: [
        "20+ yıllık vize tecrübesi",
        "Yüksek onay oranları",
        "Konsolosluklar ile güçlü ilişkiler",
        "Şeffaf süreç yönetimi",
        "Evrak kontrol ve danışmanlık",
        "Güvenli evrak teslimatı",
        "Vize takip sistemi"
      ]
    }
  },
  "otel-rezervasyonu": {
    title: "Otel Rezervasyonu",
    icon: BedIcon,
    description: "İş seyahatlerinize uygun konforlu otellerde en iyi fiyat garantisiyle konaklayın.",
    content: {
      intro: "Kurumsal seyahatleriniz için dünya genelinde kaliteli otellerde konaklama imkanı sunuyoruz. İş gezilerinizin konforunu ve verimliliğini artıracak şekilde özenle seçilmiş otellerde rezervasyon hizmeti veriyoruz.",
      features: [
        "Dünya genelinde otel rezervasyonu",
        "Kurumsal otel anlaşmaları",
        "En iyi fiyat garantisi",
        "Şehir merkezi ve havaalanı yakın oteller",
        "İş merkezlerine yakın konumlar",
        "5* lüks otellerden ekonomik seçeneklere",
        "Toplantı salonu ve iş merkezi imkanları",
        "Son dakika rezervasyon hizmeti"
      ],
      whyChoose: [
        "Geniş otel portföyü",
        "Kurumsal indirimli fiyatlar",
        "Kalite standartlarına uygun seçim",
        "Esnek iptal koşulları",
        "7/24 rezervasyon desteği",
        "Özel taleplerin karşılanması",
        "Grup rezervasyonu imkanları"
      ]
    }
  },
  "arac-kiralama-transfer": {
    title: "Araç Kiralama / Transfer",
    icon: CarIcon,
    description: "Şehir içi ve havalimanı transferlerinizi güvenli ve zamanında gerçekleştiriyoruz.",
    content: {
      intro: "Seyahatlerinizin her anında güvenli ve konforlu ulaşım hizmeti sunuyoruz. Havaalanı transferinden şehir içi ulaşıma, günlük araç kiralamasından long-term seçeneklere kadar tüm ihtiyaçlarınızı karşılıyoruz.",
      features: [
        "Havaalanı transfer hizmeti",
        "Şehir içi VIP transfer",
        "Günlük araç kiralama",
        "Haftalık/aylık araç kiralama",
        "Şoförlü araç hizmeti",
        "Minibüs ve otobüs kiralama",
        "Lüks araç seçenekleri",
        "GPS takip sistemi"
      ],
      whyChoose: [
        "Geniş araç filosu",
        "Deneyimli şoförler",
        "Zamanında hizmet garantisi",
        "Güvenlik standartları",
        "Sigortalı araçlar",
        "Esnek kiralama koşulları",
        "7/24 müşteri desteği"
      ]
    }
  },
  "soforlu-luks-arac-kiralama": {
    title: "Şoförlü Lüks Araç Kiralama",
    icon: CarIcon,
    description: "Prestijinizi yansıtan, konforlu ve şoförlü araç hizmetleri.",
    content: {
      intro: "İş toplantılarınız, önemli müşteri ziyaretleriniz ve özel günleriniz için prestijli ve konforlu ulaşım çözümleri sunuyoruz. Deneyimli şoförlerimiz ve lüks araç filomuzla size en iyi hizmeti veriyoruz.",
      features: [
        "Mercedes, BMW, Audi lüks araçlar",
        "Protokol ve VIP hizmetleri",
        "Deneyimli ve uniformlı şoförler",
        "Havaalanı karşılama hizmeti",
        "Şehirlerarası lüks transfer",
        "Özel etkinlik transferleri",
        "Wedding car hizmetleri",
        "Kurumsal protokol araçları"
      ],
      whyChoose: [
        "Prestijli araç filosu",
        "Protokol tecrübesi",
        "Güvenlik ve konfor",
        "Zamanında hizmet",
        "Özel taleplere uygunluk",
        "Gizlilik ve profesyonellik",
        "Esnek rezervasyon"
      ]
    }
  },
  "turizm": {
    title: "Turizm",
    icon: StarIcon,
    description: "İş seyahatlerinize kültürel ve turistik deneyimler de katın.",
    content: {
      intro: "İş seyahatlerinizi turistik deneyimlerle zenginleştirin. Kurumsal turlardan kültürel gezilere, team building aktivitelerinden wellness programlarına kadar geniş bir yelpazede hizmet sunuyoruz.",
      features: [
        "Kurumsal tur organizasyonları",
        "Kültürel ve tarihi turlar",
        "Team building aktiviteleri",
        "İncentive turizm programları",
        "Wellness ve spa turları",
        "Gastronomi turları",
        "Doğa ve macera turları",
        "Rehberli şehir turları"
      ],
      whyChoose: [
        "Özelleştirilmiş tur programları",
        "Deneyimli rehber kadrosu",
        "Kaliteli tur operatörleri",
        "Grup indirimleri",
        "Esnek program seçenekleri",
        "Güvenlik önceliği",
        "Kültürel deneyim odaklı"
      ]
    }
  },
  "lojistik": {
    title: "Lojistik",
    icon: TruckIcon,
    description: "Seyahatlerinizle entegre lojistik çözümleri sunuyoruz.",
    content: {
      intro: "Seyahat lojistiğinizin tüm detaylarını planlıyor ve yönetiyoruz. Bagaj yönetiminden ekipman taşımacılığına, kurumsal malzeme sevkiyatından özel kargo hizmetlerine kadar tüm ihtiyaçlarınızı karşılıyoruz.",
      features: [
        "Bagaj takip ve yönetim",
        "Kurumsal malzeme sevkiyatı",
        "Fuar ve etkinlik lojistiği",
        "Özel kargo hizmetleri",
        "Excess baggage çözümleri",
        "Uluslararası kargo",
        "Güvenli paketleme",
        "Sigortalı taşımacılık"
      ],
      whyChoose: [
        "Güvenli taşımacılık",
        "Takip edilebilir sevkiyat",
        "Hızlı teslimat",
        "Sigorta güvencesi",
        "Özel ambalajlama",
        "Gümrük işlemleri desteği",
        "Esnek çözümler"
      ]
    }
  },
  "yat-kiralama": {
    title: "Yat Kiralama",
    icon: ShipIcon,
    description: "Özel davetler ve premium deneyimler için yat kiralama hizmeti.",
    content: {
      intro: "Özel etkinlikleriniz, kurumsal toplantılarınız ve prestijli davetleriniz için lüks yat kiralama hizmeti sunuyoruz. Türkiye'nin en güzel koylarında unutulmaz deniz deneyimleri yaşayın.",
      features: [
        "Lüks yat filosu",
        "Kaptan ve mürettebat dahil",
        "Kurumsal etkinlik organizasyonu",
        "Catering hizmetleri",
        "Su sporları ekipmanları",
        "DJ ve müzik sistemi",
        "Özel rota planlaması",
        "Güneşlenme ve dinlenme alanları"
      ],
      whyChoose: [
        "Kaliteli yat filosu",
        "Deneyimli kaptan kadrosu",
        "Tam donanımlı servis",
        "Güvenlik standartları",
        "Esnek kiralama süreleri",
        "Özel taleplere uygunluk",
        "Premium deneyim"
      ]
    }
  },
  "mice": {
    title: "MICE",
    icon: PresentationIcon,
    description: "Toplantı, teşvik gezisi, kongre ve etkinlik organizasyonlarını profesyonelce yürütüyoruz.",
    content: {
      intro: "Meetings, Incentives, Conferences & Exhibitions (MICE) alanında profesyonel organizasyon hizmetleri sunuyoruz. Kurumsal etkinliklerinizin her detayını planlıyor ve mükemmel bir deneyim yaşatıyoruz.",
      features: [
        "Kurumsal toplantı organizasyonu",
        "İncentive ve teşvik gezileri",
        "Kongre ve konferans yönetimi",
        "Fuar organizasyonu",
        "Gala ve ödül törenleri",
        "Product launch etkinlikleri",
        "Team building aktiviteleri",
        "VIP misafir ağırlama"
      ],
      whyChoose: [
        "15+ yıllık MICE tecrübesi",
        "Profesyonel proje yönetimi",
        "Kreatif etkinlik tasarımı",
        "Teknoloji entegrasyonu",
        "Vendor yönetimi",
        "Budget optimizasyonu",
        "Kalite güvencesi"
      ]
    }
  }
};

export default function KurumsalSeyahatPageClient({slug}: {slug: string}) {

  if (!slug || !serviceDetails[slug as keyof typeof serviceDetails]) {
    notFound();
  }

  const service = serviceDetails[slug as keyof typeof serviceDetails];
  const ServiceIcon = service.icon;

  return (
    <div className={cn(layoutStyles.main_layout)}>
      {/* Hero Section */}
      <section className={cn(safeArea.safe_area, "py-12")}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <ServiceIcon className="w-12 h-12 text-primary" />
            </div>
          </div>
          <Text variant="handwriting" className="mb-4">Kurumsal Seyahat</Text>
          <Text variant="heading" className="text-4xl font-bold mb-4">{service.title}</Text>
          <Text variant="paragraph" className="text-xl max-w-2xl mx-auto">
            {service.description}
          </Text>
        </div>
      </section>

      {/* İçerik Section */}
      <section className={cn(safeArea.safe_area, "py-12")}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Ana İçerik */}
            <div className="lg:col-span-2 space-y-8">
              {/* Giriş */}
              <Card variant="flat_nopadding">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <ServiceIcon className="w-6 h-6 text-primary" />
                    Biz Kimiz Ve Ne Yapıyoruz?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Text variant="paragraph2">{service.content.intro}</Text>
                </CardContent>
              </Card>

              {/* Özellikler */}
              <Card variant="flat_nopadding">
                <CardHeader>
                  <CardTitle>Hizmet Kapsamımız</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.content.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Neden Bizi Tercih Etmelisiniz */}
              <Card variant="flat_nopadding">
                <CardHeader>
                  <CardTitle>Neden Bizi Tercih Etmelisiniz?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.content.whyChoose.map((reason, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-primary text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-sm">{reason}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* İletişim Kartı */}
              <Card variant="flat_nopadding">
                <CardHeader>
                  <CardTitle className="text-lg">Hemen İletişime Geçin</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">Telefon</div>
                        <div className="text-sm text-muted-foreground">0312 419 73 53</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MailIcon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">E-posta</div>
                        <div className="text-sm text-muted-foreground">info@gezilab.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <ClockIcon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">Çalışma Saatleri</div>
                        <div className="text-sm text-muted-foreground">Ptesi - Ctesi 09:00 - 18:30</div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/iletisim">Teklif Al</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Diğer Hizmetler */}
              <Card variant="flat_nopadding">
                <CardHeader>
                  <CardTitle className="text-lg">Diğer Hizmetlerimiz</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {kurumsalSeyahatRoutes
                      .filter(route => route.path !== `/kurumsal-seyahat/${slug}`)
                      .map((route, index) => (
                        <Link
                          key={index}
                          href={route.path}
                          className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="font-medium text-sm">{route.name}</div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Avantajlar */}
              <Card variant="flat_nopadding">
                <CardHeader>
                  <CardTitle className="text-lg">Avantajlarımız</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <AwardIcon className="w-5 h-5 text-primary" />
                      <span className="text-sm">24+ Yıllık Deneyim</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <UsersIcon className="w-5 h-5 text-primary" />
                      <span className="text-sm">2200+ Kurumsal Müşteri</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HeadphonesIcon className="w-5 h-5 text-primary" />
                      <span className="text-sm">7/24 Müşteri Desteği</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-5 h-5 text-primary" />
                      <span className="text-sm">TÜRSAB & IATA Üyesi</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={cn(safeArea.safe_area, "py-12 bg-muted/50")}>
        <div className="max-w-4xl mx-auto text-center">
          <Text variant="subheading" className="mb-4">
            {service.title} Hizmeti İçin Hemen İletişime Geçin
          </Text>
          <Text variant="paragraph" className="mb-6 max-w-2xl mx-auto">
            Gezilab ailesi olarak sizlerle de çalışmak için heyecanla bekliyoruz.
            Kurumsal seyahat ihtiyaçlarınız için profesyonel ekibimizden destek alın.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/iletisim">
                <PhoneIcon className="w-4 h-4 mr-2" />
                Hemen Ara
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/kurumsal-teklif-al">
                <MailIcon className="w-4 h-4 mr-2" />
                Teklif Al
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}   