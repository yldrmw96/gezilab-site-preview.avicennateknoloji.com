import Spacer from "@/components/spacer";
import { cn } from "@/lib/utils";
import styles from "@/styles/safearea.module.css";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Text from "@/components/text";
import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function EkibimizPage() {
  // Ekip üyeleri verisi
  const teamMembers = [
    {
      id: 1,
      name: "Mehmet Aydın",
      position: "Genel Müdür",
      image: "/img/team/team_1_1.jpg",
      bio: "20 yıllık turizm sektörü deneyimiyle Gezilab'ın kurucusu ve yöneticisi. Özellikle kurumsal seyahat çözümleri konusunda uzman.",
      email: "mehmet.aydin@gezilab.com",
      phone: "+90 312 419 7353",
      linkedin: "https://linkedin.com/in/mehmetaydin"
    },
    {
      id: 2,
      name: "Zehra Kaya",
      position: "Operasyon Müdürü",
      image: "/img/team/team_1_2.jpg",
      bio: "12 yıllık tecrübesiyle şirketimizin tüm operasyonel süreçlerini kusursuz şekilde yöneten değerli ekip üyemiz.",
      email: "zehra.kaya@gezilab.com",
      phone: "+90 312 419 7353",
      linkedin: "https://linkedin.com/in/zehrakaya"
    },
    {
      id: 3,
      name: "Ali Yılmaz",
      position: "Satış ve Pazarlama Direktörü",
      image: "/img/team/team_1_3.jpg",
      bio: "Kurumsal müşteri ilişkileri ve pazarlama stratejileri konusunda uzmanlaşmış, 10 yılı aşkın deneyime sahip yöneticimiz.",
      email: "ali.yilmaz@gezilab.com",
      phone: "+90 312 419 7353",
      linkedin: "https://linkedin.com/in/aliyilmaz"
    },
    {
      id: 4,
      name: "Ayşe Demir",
      position: "Vize ve Pasaport Uzmanı",
      image: "/img/team/team_1_4.jpg",
      bio: "150'den fazla ülkenin vize süreçleri konusunda deneyimli, karmaşık vize başvurularınızı kolaylaştıran uzman danışmanımız.",
      email: "ayse.demir@gezilab.com",
      phone: "+90 312 419 7353",
      linkedin: "https://linkedin.com/in/aysedemir"
    },
    {
      id: 5,
      name: "Mustafa Öztürk",
      position: "Kıdemli Tur Rehberi",
      image: "/img/team/team_1_5.jpg",
      bio: "İngilizce, Almanca, İspanyolca, Rusça ve Arapça bilen, 45 ülke deneyimine sahip profesyonel tur rehberimiz.",
      email: "mustafa.ozturk@gezilab.com",
      phone: "+90 312 419 7353",
      linkedin: "https://linkedin.com/in/mustafaozturk"
    },
    {
      id: 6,
      name: "Elif Çelik",
      position: "Müşteri İlişkileri Yöneticisi",
      image: "/img/team/team_1_6.jpg",
      bio: "Müşteri memnuniyeti konusunda uzmanlaşmış, seyahat deneyiminizin kusursuz olması için çalışan güler yüzlü ekip üyemiz.",
      email: "elif.celik@gezilab.com",
      phone: "+90 312 419 7353",
      linkedin: "https://linkedin.com/in/elifcelik"
    },
    {
      id: 7,
      name: "Emre Koç",
      position: "Rezervasyon ve Biletleme Uzmanı",
      image: "/img/team/team_1_7.jpg",
      bio: "Uluslararası otel zincirleri ve havayolları ile yakın ilişkilere sahip, sizin için en uygun seçenekleri sunan uzmanımız.",
      email: "emre.koc@gezilab.com",
      phone: "+90 312 419 7353",
      linkedin: "https://linkedin.com/in/emrekoc"
    },
    {
      id: 8,
      name: "Seda Yıldırım",
      position: "Finans ve Muhasebe Müdürü",
      image: "/img/team/team_1_8.jpg",
      bio: "Şirketimizin finansal operasyonlarını yöneten, kurumsal ödeme çözümleri ve faturalama sistemlerinden sorumlu uzmanımız.",
      email: "seda.yildirim@gezilab.com",
      phone: "+90 312 419 7353",
      linkedin: "https://linkedin.com/in/sedayildirim"
    },
  ];

  // Ekip istatistikleri
  const teamStats = [
    { value: "20+", label: "Yıllık Deneyim" },
    { value: "150+", label: "Hizmet Verilen Ülke" },
    { value: "2200+", label: "Kurumsal Müşteri" },
    { value: "1.5M+", label: "Mutlu Yolcu" }
  ];

  return (
    <div className="flex flex-col">
      <Spacer />
      <section className={cn(styles.safe_area)}>
        <div className="flex flex-col items-center mb-10 text-center">
          <Text variant="handwriting">Bizimle Tanışın</Text>
          <Text variant="heading">Profesyonel Ekibimiz</Text>
          <Text variant="paragraph" className="max-w-2xl mt-2">
            1999 yılından beri hizmet veren şirketimizin deneyimli ekibi, seyahat deneyiminizi en üst seviyeye çıkarmak için çalışıyor. Her biri alanında uzman ekip üyelerimizle tanışın.
          </Text>
        </div>

        {/* Ekip İstatistikleri */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 rounded-xl p-8">
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Ekibimizin Değerleri */}
        <div className="mb-12 bg-gray-50 p-8 rounded-xl">
          <div className="text-center mb-6">
            <Text variant="subheading">Değerlerimiz</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-primary font-bold mb-2">Güven ve Şeffaflık</div>
              <p className="text-sm text-gray-600">Müşterilerimizle olan tüm etkileşimlerimizde dürüstlük ve şeffaflık ilkesiyle hareket ediyoruz.</p>
            </div>
            <div className="text-center p-4">
              <div className="text-primary font-bold mb-2">Uzmanlık ve Kalite</div>
              <p className="text-sm text-gray-600">Her bir ekip üyemiz kendi alanında uzmanlaşmış, sürekli gelişen ve en kaliteli hizmeti sunmayı hedefleyen profesyonellerdir.</p>
            </div>
            <div className="text-center p-4">
              <div className="text-primary font-bold mb-2">Çözüm Odaklı Yaklaşım</div>
              <p className="text-sm text-gray-600">Karşılaşacağınız her türlü seyahat sorununda pratik ve hızlı çözümler üretmek için buradayız.</p>
            </div>
          </div>
        </div>

        {/* Ekip Üyeleri */}
        <div className="mb-6">
          <Text variant="subheading" className="mb-6 text-center">Uzman Kadromuz</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow py-0 gap-3">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-between border-t py-4 mt-auto">
                  <div className="flex gap-2">
                    <Link href={`mailto:${member.email}`} className="text-gray-600 hover:text-primary">
                      <MailIcon size={18} />
                    </Link>
                    <Link href={`tel:${member.phone}`} className="text-gray-600 hover:text-primary">
                      <PhoneIcon size={18} />
                    </Link>
                    <Link href={member.linkedin} target="_blank" className="text-gray-600 hover:text-primary">
                      <LinkedinIcon size={18} />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Kariyer Fırsatları */}
        <div className="p-8 rounded-xl mt-12 mb-4 text-center">
          <Text variant="subheading" className="mb-2">Ekibimize Katılın</Text>
          <p className="text-gray-700 mb-4">Sürekli büyüyen ekibimizde sizleri de görmek isteriz. Açık pozisyonlar için bizimle iletişime geçin.</p>
          <Link href="/bize-ulasin" className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
            İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  )
}