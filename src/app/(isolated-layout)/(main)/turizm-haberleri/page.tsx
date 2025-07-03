import Spacer from "@/components/spacer";
import { cn } from "@/lib/utils";
import styles from "@/styles/safearea.module.css";
import Text from "@/components/text";
import { 
  NewspaperIcon, 
  TrendingUpIcon, 
  ClockIcon, 
  TagIcon,
  StarIcon,
  CalendarIcon,
  EyeIcon,
  SearchIcon
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TurizmHaberleriPage() {
  // Kategoriler
  const categories = [
    { name: "Tümü", count: 48, active: true },
    { name: "Destinasyon", count: 12 },
    { name: "Havayolu", count: 8 },
    { name: "Otel", count: 15 },
    { name: "Vize", count: 6 },
    { name: "Teknoloji", count: 4 },
    { name: "Sektör", count: 3 }
  ];

  // Öne Çıkan Haberler
  const featuredNews = [
    {
      id: 1,
      title: "Türkiye'nin Yeni Turizm Bölgesi: Mardin'de Butik Oteller Açılıyor",
      summary: "UNESCO Dünya Mirası Listesi'ndeki Mardin, butik otel yatırımlarıyla kültür turizminde yeni bir çağ başlatıyor.",
      image: "https://images.odamax.com/img/800x600/odamax/image/upload/e5oolgcabysubiibdqec.jpg",
      category: "Destinasyon",
      readTime: "5 dk",
      views: 1240,
      publishDate: "2024-03-20",
      featured: true,
      author: "Mehmet Kaya"
    },
    {
      id: 2,
      title: "Türk Hava Yolları'ndan Avrupa Rotalarında %25 İndirim",
      summary: "THY, yaz sezonu öncesi Avrupa rotalarındaki tüm uçuşlarında özel indirim kampanyası başlattı.",
      image: "https://cdn.turkishairlines.com/m/600e3408644bef93/original/1400x600-jpg.jpg",
      category: "Havayolu",
      readTime: "3 dk",
      views: 2180,
      publishDate: "2024-03-19",
      featured: true,
      author: "Ayşe Demir"
    },
    {
      id: 3,
      title: "Kapadokya'da Lüks Balon Turları Başlıyor",
      summary: "Kapadokya'nın dünya çapında ünlü balon turları, yeni lüks seçenekleriyle daha konforlu hale geliyor.",
      image: "https://kapadokyaturlari.com.tr/uploads/2021/12/kapadokya-balon-turlari.jpg",
      category: "Destinasyon",
      readTime: "4 dk",
      views: 950,
      publishDate: "2024-03-18",
      featured: true,
      author: "Fatma Yılmaz"
    }
  ];

  // Tüm Haberler
  const allNews = [
    {
      id: 4,
      title: "Antalya Havalimanı Kapasiteyi %30 Artırıyor",
      summary: "Antalya Havalimanı'nda yapılan genişletme çalışmaları tamamlandı. Yeni terminal ile yıllık 60 milyon yolcu kapasitesi hedefleniyor.",
      image: "https://antalyaeksprescomtr.teimg.com/crop/1280x720/antalyaekspres-com-tr/uploads/2024/11/whatsapp-gorsel-2024-11-12-saat-190033-c3ef2209.jpg",
      category: "Havayolu",
      readTime: "6 dk",
      views: 1580,
      publishDate: "2024-03-17",
      author: "Kemal Özkan"
    },
    {
      id: 5,
      title: "Bodrum'da Yeni Marina Projesi",
      summary: "Bodrum'da 500 teknelik kapasiteye sahip yeni marina projesi onaylandı. Lüks yat turizmine yeni soluk getirecek.",
      image: "https://yalikavakmarina.com.tr/wp-content/uploads/2024/04/DJI_0672-2048x1151-1.jpeg",
      category: "Destinasyon",
      readTime: "7 dk",
      views: 890,
      publishDate: "2024-03-16",
      author: "Zeynep Aktaş"
    },
    {
      id: 6,
      title: "Schengen Vize Başvuru Süreleri Kısaldı",
      summary: "AB ülkeleri için Schengen vize başvuru süreçleri dijitalleşti. Artık 7 gün içerisinde sonuç alınabiliyor.",
      image: "https://www.turizmprojedergisi.com/resim/6757ee0d4c5c5+++%20shengen%20vizesi.jpg",
      category: "Vize",
      readTime: "4 dk",
      views: 2340,
      publishDate: "2024-03-15",
      author: "Ahmet Güven"
    },
    {
      id: 7,
      title: "Safranbolu'da Tarihi Evler Otel Oluyor",
      summary: "UNESCO koruması altındaki Safranbolu'da tarihi evlerin otele dönüştürülme projesi hızla devam ediyor.",
      image: "https://www.safranbolu.bel.tr/thumb.php?p=uploads/haberler/fd8a5.png&w=1000",
      category: "Otel",
      readTime: "5 dk",
      views: 720,
      publishDate: "2024-03-14",
      author: "Elif Güler"
    },
    {
      id: 8,
      title: "Dijital Nomad Vizesi Türkiye'de Başlıyor",
      summary: "Türkiye, uzaktan çalışan yabancılar için özel dijital nomad vizesi çıkarmaya hazırlanıyor.",
      image: "https://blog.onwardticket.com/wp-content/uploads/2023/08/turkey_digital_nomad_visa.jpg",
      category: "Vize",
      readTime: "8 dk",
      views: 1650,
      publishDate: "2024-03-13",
      author: "Murat Çelik"
    },
    {
      id: 9,
      title: "İstanbul'da Yeni Cruise Limanı",
      summary: "İstanbul'un üçüncü cruise limanı Galataport'tan sonra Zeytinburnu'nda inşa edilecek.",
      image: "https://www.yapi.com.tr/Uploads/HaberMedya/172489/e56d00fdc36645018773cb5e87843d30-480x268.jpg",
      category: "Destinasyon",
      readTime: "6 dk",
      views: 1120,
      publishDate: "2024-03-12",
      author: "Seda Acar"
    }
  ];

  // Trend olan haberler
  const trendingNews = [
    { title: "Yaz tatili rezervasyonları başladı",
      image: "https://www.yapi.com.tr/Uploads/HaberMedya/172489/e56d00fdc36645018773cb5e87843d30-480x268.jpg",
      views: 3240 },
    { title: "Erken rezervasyonda %40 indirim",
      image: "https://www.turizmprojedergisi.com/resim/6757ee0d4c5c5+++%20shengen%20vizesi.jpg",
      views: 2890 },
    { title: "Karadeniz turları popüler",
      image: "https://www.turizmprojedergisi.com/resim/6757ee0d4c5c5+++%20shengen%20vizesi.jpg",
      views: 2150 },
    { title: "Wellness otellere yoğun talep",
      image: "https://www.turizmprojedergisi.com/resim/6757ee0d4c5c5+++%20shengen%20vizesi.jpg",
      views: 1980 },
    { title: "Gastronomi turları artıyor",
      image: "https://www.turizmprojedergisi.com/resim/6757ee0d4c5c5+++%20shengen%20vizesi.jpg",
      views: 1650 }
  ];

  return (
    <div className="flex flex-col">
      <section className={cn(styles.safe_area)}>
        {/* Hero Section */}
       

        {/* Arama ve Filtre */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md max-sm:w-full">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Haberlerde arama yapın..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Öne Çıkan Haberler */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <StarIcon size={20} className="text-primary" />
            <Text variant="subheading" className="!m-0">Öne Çıkan Haberler</Text>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredNews.map((news, index) => (
              <Link href={`/turizm-haberleri/p/${news.id}`} key={news.id}>
                <Card className={cn(
                  "overflow-hidden hover:shadow-xl border-none shadow-none bg-transparent p-0 transition-all duration-300 cursor-pointer group",
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                )}>
                  <div className={cn(
                    "relative overflow-hidden",
                    index === 0 ? "h-80" : "h-48"
                  )}>
                    <img 
                      src={news.image || ""} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">{news.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className={cn(
                        "text-white font-bold mb-2 line-clamp-2",
                        index === 0 ? "text-2xl" : "text-lg"
                      )}>
                        {news.title}
                      </h3>
                      <p className={cn(
                        "text-white/90 text-sm line-clamp-2 mb-3",
                        index === 0 ? "block" : "hidden md:block"
                      )}>
                        {news.summary}
                      </p>
                      <div className="flex items-center gap-4 text-white/80 text-xs">
                        <div className="flex items-center gap-1">
                          <CalendarIcon size={12} />
                          <span>{new Date(news.publishDate).toLocaleDateString('tr-TR')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon size={12} />
                          <span>{news.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <EyeIcon size={12} />
                          <span>{news.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ana Haber Listesi */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <NewspaperIcon size={20} className="text-primary" />
              <Text variant="subheading" className="!m-0">Son Haberler</Text>
            </div>
            
            <div className="space-y-6">
              {allNews.map((news) => (
                <Link href={`/turizm-haberleri/p/${news.id}`} key={news.id}>
                  <Card className="overflow-hidden hover:shadow-lg border-none shadow-none bg-transparent p-0 transition-all duration-300 cursor-pointer group">
                    <div className="md:flex">
                      <div className="md:w-1/3 relative overflow-hidden">
                        <img 
                          src={news.image || "/img/normal/placeholder.jpg"} 
                          alt={news.title}
                          className="w-full bg-accent h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary">{news.category}</Badge>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <CardHeader className="p-0 mb-3">
                          <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                            {news.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mb-4">
                          <p className="text-gray-600 line-clamp-3 text-sm">
                            {news.summary}
                          </p>
                        </CardContent>
                        <CardFooter className="p-0 flex justify-between items-center">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <CalendarIcon size={14} />
                              <span>{new Date(news.publishDate).toLocaleDateString('tr-TR')}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ClockIcon size={14} />
                              <span>{news.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <EyeIcon size={14} />
                              <span>{news.views}</span>
                            </div>
                          </div>
                          <div className="bg-primary text-white px-4 py-2 rounded-md text-sm group-hover:bg-primary/90 transition-colors">
                            Oku
                          </div>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Önceki</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Sonraki</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trend Haberler */}
            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUpIcon size={18} className="text-primary" />
                  Trend Haberler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingNews.map((news, index) => (
                  <Link href="/turizm-haberleri" key={index}>
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">

                      <img  src={news.image} className={`w-8 h-8  text-white rounded-full flex items-center justify-center text-sm font-bold bg-cover bg-center`} />
                      
                      <div className="flex-1">
                        <p className="text-sm font-medium line-clamp-2">{news.title}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <EyeIcon size={12} />
                          <span>{news.views} görüntüleme</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-center">Haber Bülteni</CardTitle>
                <CardDescription className="text-center">
                  Turizm sektöründeki son gelişmeleri e-posta ile alın
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-3">
                  <Input placeholder="E-posta adresiniz" type="email" />
                  <Button className="w-full">Abone Ol</Button>
                </form>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Abone olarak <Link href="/c/gizlilik" className="text-primary hover:underline">Gizlilik Politikamızı</Link> kabul etmiş sayılırsınız.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}