"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import safeArea from "@/styles/safearea.module.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
 import { 
  CalendarIcon, 
  MapPinIcon, 
  UsersIcon, 
  ClockIcon,
  StarIcon,
  CheckIcon,
  XIcon,
  PhoneIcon,
  ShareIcon,
  HeartIcon,
  ImageIcon,
  InfoIcon,
  ChevronRightIcon
} from "lucide-react";
import { useSidebar } from "@/store/hooks/sidebar.hook";
import Link from "next/link";
import ImageCarouselBasic, {
  CarouselImages,
} from "@/components/commerce-ui/image-carousel-basic";

// Mock tur detayları
const mockTurDetay = {
  id: 1,
  title: "Paris Romantik Şehir Turu",
  location: "Paris, Fransa",
  duration: "5 Gün 4 Gece",
  groupSize: "Min 15 - Max 20 Kişi",
  tourCode: "EUR-PAR-2024",
  price: "€1,250",
  discountedPrice: "€999",
  discount: "20%",
  rating: 5,
  reviewCount: 128,
  images: [
    "/img/trip/tour_1_1.jpg",
    "/img/trip/tour_1_2.jpg", 
    "/img/trip/tour_1_3.jpg",
    "/img/trip/tour_1_4.jpg",
    "/img/trip/tour_1_5.jpg"
  ],
  highlights: [
    "Eiffel Kulesi'ne özel giriş",
    "Louvre Müzesi rehberli tur",
    "Seine Nehri'nde romantik tekne turu",
    "Versailles Sarayı tam gün turu",
    "Montmartre bölgesi yürüyüş turu"
  ],
  included: [
    "4* otelde konaklama (kahvaltı dahil)",
    "Havaalanı transferleri",
    "Profesyonel Türkçe rehber",
    "Müze giriş ücretleri",
    "Seine Nehri tekne turu",
    "Seyahat sigortası"
  ],
  notIncluded: [
    "Uçak bileti",
    "Öğle ve akşam yemekleri",
    "Kişisel harcamalar",
    "Bahşişler",
    "Vize ücreti"
  ],
  itinerary: [
    {
      day: 1,
      title: "İstanbul - Paris",
      description: "İstanbul'dan hareket ve Paris'e varış. Havaalanından otelimize transfer. Serbest zaman."
    },
    {
      day: 2,
      title: "Paris Şehir Turu",
      description: "Eiffel Kulesi, Champs-Elysées, Arc de Triomphe, Notre Dame Katedrali ziyaretleri. Akşam Seine Nehri'nde tekne turu."
    },
    {
      day: 3,
      title: "Louvre Müzesi ve Sanat",
      description: "Dünyanın en büyük müzesi Louvre'da rehberli tur. Mona Lisa ve diğer başyapıtlar. Öğleden sonra Orsay Müzesi."
    },
    {
      day: 4,
      title: "Versailles Sarayı",
      description: "Muhteşem Versailles Sarayı'na tam gün tur. Saray, bahçeler ve Marie Antoinette'in köyü."
    },
    {
      day: 5,
      title: "Montmartre ve Dönüş",
      description: "Sanatçılar mahallesi Montmartre'da gezinti. Sacré-Cœur Bazilikası. Öğleden sonra havaalanına transfer."
    }
  ]
};

export default function TurPage({ params }: { params: { tur: string } }) {
  const { values: { headerHeight } } = useSidebar();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={cn(safeArea.safe_area, "!h-auto")}>
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRightIcon className="w-4 h-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/turlar">Turlar</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRightIcon className="w-4 h-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{mockTurDetay.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Hero Bölümü */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Galeri */}
        <div className="space-y-4">

          <div className="relative shinning-capturer rounded-3xl overflow-hidden">
            
            <ImageCarouselBasic
             images={mockTurDetay.images.map((image: string) => ({
              title: mockTurDetay.title,
              url: image,
            }))} 
            imageFit="cover"
            aspectRatio="square"

            />

            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                size="icon"
                variant="secondary"
                className="bg-white/90 backdrop-blur"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <HeartIcon className={cn("w-5 h-5", isFavorite && "fill-red-500 text-red-500")} />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="bg-white/90 backdrop-blur"
              >
                <ShareIcon className="w-5 h-5" />
              </Button>
            </div>
            {mockTurDetay.discount && (
              <Badge className="shinning-default absolute top-4 left-4 bg-red-500 text-white px-4 py-2 text-lg font-bold">
                {mockTurDetay.discount} İndirim
              </Badge>
            )}
          </div>
          
       
        </div>

        {/* Tur Bilgileri */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPinIcon className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{mockTurDetay.location}</span>
              <div className="ml-auto flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < mockTurDetay.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    )}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">
                  ({mockTurDetay.reviewCount} değerlendirme)
                </span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">{mockTurDetay.title}</h1>
            <p className="text-sm text-muted-foreground mb-4">
              Tur Kodu: {mockTurDetay.tourCode}
            </p>
          </div>

          {/* Hızlı Bilgiler */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Süre</p>
                <p className="font-semibold">{mockTurDetay.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <UsersIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Grup Büyüklüğü</p>
                <p className="font-semibold">{mockTurDetay.groupSize}</p>
              </div>
            </div>
          </div>

          {/* Fiyat ve Rezervasyon */}
          <Card className="border-none !shadow-none !rounded-none !p-0">
            <CardContent className="px-0">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Kişi başı başlangıç fiyatı</p>
                  <div className="flex items-baseline gap-2">
                    {mockTurDetay.discountedPrice && (
                      <>
                        <span className="text-3xl font-bold text-primary">
                          {mockTurDetay.discountedPrice}
                        </span>
                        <span className="text-xl text-muted-foreground line-through">
                          {mockTurDetay.price}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Son 5 koltuk!
                </Badge>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Hemen Rezervasyon Yap
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Bilgi Al: 0850 123 45 67
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Öne Çıkanlar */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-primary opacity-0" />
              Tur Öne Çıkanları
            </h3>
            <ul className="space-y-2">
              {mockTurDetay.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="mt-8" />

      {/* Detaylı Bilgiler */}
      <Tabs defaultValue="program" className="w-full max-sm:flex-col">
        <TabsList className="w-full justify-start !flex-wrap h-auto p-0 bg-transparent border-b rounded-none overflow-x-auto  max-sm:flex-col">
          <TabsTrigger 
            value="program" 
            className="rounded-none !border-t-0 !border-l-0 border-r-0 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-3 md:px-6 py-3 whitespace-nowrap"
          >
            Tur Programı
          </TabsTrigger>
          <TabsTrigger 
            value="included" 
            className="rounded-none !border-t-0 !border-l-0 border-r-0 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-3 md:px-6 py-3 whitespace-nowrap"
          >
            Dahil Olanlar
          </TabsTrigger>
          <TabsTrigger 
            value="info" 
            className="rounded-none !border-t-0 !border-l-0 border-r-0 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-3 md:px-6 py-3 whitespace-nowrap"
          >
            Önemli Bilgiler
          </TabsTrigger>
          <TabsTrigger 
            value="reviews" 
            className="rounded-none !border-t-0 !border-l-0 border-r-0 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-3 md:px-6 py-3 whitespace-nowrap"
          >
            Yorumlar ({mockTurDetay.reviewCount})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="program" className="mt-8">
          <div className="space-y-6">
            {mockTurDetay.itinerary.map((day) => (
              <Card key={day.day} className="overflow-hidden border-none !shadow-none !rounded-none !p-0 gap-0">
                <CardHeader className="!p-0">
                  <CardTitle className="!p-0">
                    {day.day}. Gün - {day.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="!p-0">
                  <p className="text-sm opacity-70">{day.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="included" className="mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-green-500" />
                Tur Fiyatına Dahil Olanlar
              </h3>
              <ul className="space-y-2">
                {mockTurDetay.included.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <XIcon className="w-5 h-5 text-red-500" />
                Tur Fiyatına Dahil Olmayanlar
              </h3>
              <ul className="space-y-2">
                {mockTurDetay.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="info" className="mt-8 !p-0">
          <Card className="border-none !shadow-none !rounded-none !p-0">
            <CardHeader className="!p-0">
              <CardTitle className="flex items-center gap-2 !p-0">
                <InfoIcon className="w-5 h-5 text-primary" />
                Önemli Bilgiler
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 !p-0">
              <div>
                <h4 className="font-semibold mb-2">İptal Koşulları</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Tur tarihinden 30 gün önce: %100 iade</li>
                  <li>• Tur tarihinden 15-29 gün önce: %50 iade</li>
                  <li>• Tur tarihinden 0-14 gün önce: İade yok</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Gerekli Belgeler</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Minimum 6 ay geçerli pasaport</li>
                  <li>• Schengen vizesi</li>
                  <li>• Seyahat sağlık sigortası</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Notlar</h4>
                <p className="text-sm text-muted-foreground">
                  Tur programı, hava koşulları ve müze kapalı günleri nedeniyle değişiklik gösterebilir. 
                  Rehberimiz gerekli durumlarda program değişikliği yapma hakkına sahiptir.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-8">
          <div className="space-y-6">
            {/* Değerlendirme Özeti */}
            <Card className="border-none !shadow-none !rounded-none !p-0">
              <CardContent className="">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">{mockTurDetay.rating}.0</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">{mockTurDetay.reviewCount} değerlendirme</p>
                  </div>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-sm w-3">{rating}</span>
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-yellow-400" 
                            style={{ width: rating === 5 ? '85%' : rating === 4 ? '10%' : rating === 3 ? '3%' : rating === 2 ? '1%' : '1%' }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-10 text-right">
                          {rating === 5 ? '108' : rating === 4 ? '13' : rating === 3 ? '4' : rating === 2 ? '2' : '1'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Yorumlar */}
            <div className="divide-y divide-gray-200 flex flex-col gap-4 ">
              {[
                {
                  name: "Ayşe Yılmaz",
                  date: "15 Ekim 2024",
                  rating: 5,
                  comment: "Harika bir deneyimdi! Rehberimiz çok bilgili ve ilgiliydi. Paris'in tüm güzelliklerini görmek için mükemmel bir program."
                },
                {
                  name: "Mehmet Kaya",
                  date: "8 Ekim 2024",
                  rating: 5,
                  comment: "Organizasyon çok başarılıydı. Oteller temiz ve merkezi konumdaydı. Kesinlikle tavsiye ederim."
                },
                {
                  name: "Zeynep Demir",
                  date: "29 Eylül 2024",
                  rating: 4,
                  comment: "Genel olarak çok memnun kaldık. Tek eksi yemekler biraz daha çeşitli olabilirdi."
                }
              ].map((review, index) => (
                <Card key={index} className="border-none !shadow-none !rounded-none !p-0">
                  <CardContent className="!border-none !shadow-none p-0 !rounded-none">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={cn(
                              "w-4 h-4",
                              i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="outline" className="w-full">
              Tüm Yorumları Gör
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Benzer Turlar */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Benzer Turlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: 2,
              title: "Roma Antik Şehir Turu",
              location: "Roma, İtalya",
              duration: "7 Gün",
              price: "€1,450",
              image: "/img/trip/tour_1_2.jpg",
              rating: 5
            },
            {
              id: 3,
              title: "Londra Kültür Turu",
              location: "Londra, İngiltere",
              duration: "5 Gün",
              price: "£1,100",
              image: "/img/trip/tour_1_3.jpg",
              rating: 4
            },
            {
              id: 4,
              title: "Amsterdam Kanal Turu",
              location: "Amsterdam, Hollanda",
              duration: "4 Gün",
              price: "€890",
              image: "/img/trip/tour_1_4.jpg",
              rating: 5
            }
          ].map((tour, index) => (
            <Link key={index} href={`/tur/${tour.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border-none !shadow-none !rounded-none !p-0">
                <div className="relative h-48 rounded-md overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{tour.location}</span>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={cn(
                            "w-3 h-3",
                            i < tour.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{tour.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <ClockIcon className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{tour.price}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}