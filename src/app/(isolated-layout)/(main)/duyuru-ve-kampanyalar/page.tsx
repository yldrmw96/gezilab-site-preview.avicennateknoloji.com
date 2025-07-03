import Spacer from "@/components/spacer";
import { cn } from "@/lib/utils";
import styles from "@/styles/safearea.module.css";
import Text from "@/components/text";
import { 
  CalendarIcon, 
  BadgePercentIcon, 
  ClockIcon, 
  StarIcon
} from "lucide-react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {Image2} from "@/components/image2";

export default function DuyuruVeKampanyalarPage() {
  // Kampanyalar verisi
  const campaigns = [
    {
      id: 1,
      title: "Yaz Tatili Erken Rezervasyon Fırsatı",
      description: "2024 yaz sezonu tatillerinizde %25'e varan erken rezervasyon indirimleri sizi bekliyor. 1 Mayıs'a kadar yapılan tüm rezervasyonlarda geçerlidir.",
      image: "/img/6383.jpg",
      badge: "Erken Rezervasyon",
      validUntil: "01.05.2024",
      discount: "25%",
      featured: true
    },
    {
      id: 2,
      title: "Avrupa Turu Kültür Paketi",
      description: "İtalya, Fransa, İspanya rotasındaki 10 günlük kültür turunda 2 kişi alana 1 kişi bedava kampanyası. Sanat, tarih ve lezzet dolu bir Avrupa deneyimi.",
      image: "/img/f17bc387-0e09-45c5-80a7-0cd5439040f6.jpg",
      badge: "2 Alana 1 Bedava",
      validUntil: "15.04.2024",
      discount: "33%",
      featured: true
    },
    {
      id: 3,
      title: "Uzak Rota Keşifleri",
      description: "Tayland, Vietnam, Kamboçya rotasında 14 günlük uzak doğu macerası. Uçak bileti, konaklama ve turlar dahil paketlerde özel indirim.",
      image: "/img/thailande_titre.jpg",
      badge: "Uzak Rotalar",
      validUntil: "30.06.2024",
      discount: "15%",
      featured: false
    },
    {
      id: 4,
      title: "Cruise Gemi Turlarında Bahar İndirimi",
      description: "Akdeniz, Ege ve Adriyatik Denizi rotalarındaki lüks gemi turlarında kabin başına 200€ indirim fırsatı.",
      image: "/img/spring_2024_tile_690x310.jpg",
      badge: "Bahar İndirimi",
      validUntil: "20.05.2024",
      discount: "200€",
      featured: true
    },
    {
      id: 5,
      title: "Kurumsal Seyahat Avantajları",
      description: "Şirket seyahatlerinizde yıllık anlaşma yapan kurumsal müşterilerimize özel indirim ve ayrıcalıklar.",
      image: "/img/Corporate-travellers-in-group-shutterstock_1463857361.jpg",
      badge: "Kurumsal",
      validUntil: "Süresiz",
      discount: "Özel Fiyat",
      featured: false
    },
    {
      id: 6,
      title: "Vize İşlemlerinde İndirim",
      description: "İngiltere, ABD ve Schengen vize işlemlerinde danışmanlık hizmetlerinde %20 indirim fırsatı.",
      image: "/img/logo-visa.jpg",
      badge: "Vize İşlemleri",
      validUntil: "31.12.2024",
      discount: "20%",
      featured: false
    }
  ];

  // Duyurular verisi
  const announcements = [
    {
      id: 1,
      title: "Yeni Ofisimiz Açıldı",
      description: "İzmir'deki yeni ofisimiz Alsancak'ta hizmete girmiştir. Tüm seyahat ihtiyaçlarınız için sizi ofisimize bekliyoruz.",
      date: "15.03.2024",
      type: "Firma Haberi"
    },
    {
      id: 2,
      title: "Online Rezervasyon Sistemimiz Yenilendi",
      description: "Kullanıcı dostu arayüzü ve hızlı işlem yapabilme özelliğiyle web sitemiz tamamen yenilendi. Artık mobil uyumlu platformumuzdan tüm işlemlerinizi kolaylıkla yapabilirsiniz.",
      date: "01.03.2024",
      type: "Teknoloji"
    },
    {
      id: 3,
      title: "Covid-19 Seyahat Önlemleri Güncellendi",
      description: "Birçok ülke, Covid-19 ile ilgili seyahat kısıtlamalarını kaldırmıştır. Güncel ülke girişi şartları için seyahat danışmanlarımız ile iletişime geçebilirsiniz.",
      date: "10.02.2024",
      type: "Seyahat Bilgisi"
    }
  ];

  return (
    <div className="flex flex-col">
      <Spacer />
      <section className={cn(styles.safe_area)}>
        <div className="flex flex-col items-center mb-10 text-center">
          <Text variant="handwriting">Fırsatlar</Text>
          <Text variant="heading">Duyuru ve Kampanyalar</Text>
          <Text variant="paragraph" className="max-w-2xl mt-2">
            En güncel kampanyalarımız, duyurularımız ve fırsatlarımızdan haberdar olun. Sınırlı süreli tekliflerimizi kaçırmayın.
          </Text>
        </div>

        {/* Öne Çıkan Kampanyalar */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <StarIcon size={20} className="text-primary" />
            <Text variant="subheading" className="!m-0">Öne Çıkan Fırsatlar</Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns
              .filter(campaign => campaign.featured)
              .map((campaign) => (
                <Card key={campaign.id} variant="flat_nopadding" className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image2
                      src={campaign.image} 
                      alt={campaign.title}
                      fill
                      className="w-full h-full object-cover [&_img]:object-cover  rounded-4xl"
                     
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-white">{campaign.badge}</Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="font-bold">{campaign.discount} İndirim</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{campaign.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{campaign.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t pt-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <CalendarIcon size={14} />
                      <span>Son tarih: {campaign.validUntil}</span>
                    </div>
                    <Link 
                      href={`/duyuru-ve-kampanyalar/${campaign.id}`} 
                      className="bg-primary text-white px-3 py-1 rounded-md text-sm hover:bg-primary/90 transition-colors"
                    >
                      Detaylar
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>

        {/* Tüm Kampanyalar */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <BadgePercentIcon size={20} className="text-primary" />
            <Text variant="subheading" className="!m-0">Tüm Kampanyalar</Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} variant="flat_nopadding" className="rounded-4xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image2
                    src={campaign.image || "/img/normal/placeholder.jpg"} 
                    alt={campaign.title}
                    className="w-full h-full object-cover [&_img]:object-cover rounded-4xl"
                    fill
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary text-white">{campaign.badge}</Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="font-bold">{campaign.discount} İndirim</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{campaign.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{campaign.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <CalendarIcon size={14} />
                    <span>Son tarih: {campaign.validUntil}</span>
                  </div>
                  <Link 
                    href={`/duyuru-ve-kampanyalar/${campaign.id}`} 
                    className="bg-primary text-white px-3 py-1 rounded-md text-sm hover:bg-primary/90 transition-colors"
                  >
                    Detaylar
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Duyurular */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <ClockIcon size={20} className="text-primary" />
            <Text variant="subheading" className="!m-0">Son Duyurular</Text>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    <Badge variant="outline">{announcement.type}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <CalendarIcon size={14} />
                    <span>{announcement.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{announcement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Kampanya Abone Bölümü */}
        <div className="bg-accentp-8 rounded-xl mb-4 text-center">
          <Text variant="subheading" className="mb-2">Kampanyalardan Haberdar Olun</Text>
          <p className="text-gray-700 mb-6">E-posta bültenimize abone olarak en güncel fırsatlardan ilk siz haberdar olun.</p>
          
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="flex-1 px-4 py-2 rounded-l-md border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
              >
                Abone Ol
              </button>
            </form>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Abone olarak <Link href="/c/gizlilik" className="text-primary hover:underline">Gizlilik Sözleşmesi</Link>ni kabul etmiş sayılırsınız.
          </p>
        </div>
      </section>
    </div>
  )
}