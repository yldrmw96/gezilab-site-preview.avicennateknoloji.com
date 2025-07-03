"use client"
import Text from "@/components/text"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import React from "react"
import Autoplay from "embla-carousel-autoplay"
import { randomBytes } from "crypto"
import slugify from "react-slugify"
import Link from "next/link"
import styles from "@/styles/safearea.module.css";
import { localizedStringAlternate } from "@/lib/localizedStringAlternate"

const makeSlugId = (title: string) => {
  // const id = randomBytes(6).toString('hex');
  const slug = slugify(title);
  return `${slug}`;
}

const data = {
  "announcements": [
    {
      "image": "/img/news/66adf37b1706cf2dc93237f0.webp",
      "slug": makeSlugId("Adana Havalimanı Kapanıyor!"),
      "title": "Adana Havalimanı Kapanıyor!",
      "summary": "Enterprise ile Yüzyıl Turizm iş birliği duyurusu ve Adana Havalimanı'nın kapanacağı bilgisi.",
      "section": "Duyuru ve Kampanyalar"
    },
    {
      "image": "/img/news/ajet-04.jpg",
      "slug": makeSlugId("AJET Bilet Satışları Başladı!"),
      "title": "AJET Bilet Satışları Başladı!",
      "summary": "AJET uçuşlarına yönelik bilet satışlarının başladığı duyurusu.",
      "section": "Duyuru ve Kampanyalar / Turizm Haberleri"
    }
  ],
  "news": [
    {
      "image": "/img/news/ajet-04.jpg",
      "slug": makeSlugId("AJET Bilet Satışları Başladı!"),
      "title": "AJET Bilet Satışları Başladı!",
      "summary": "AJET biletlerinin satışa açıldığı bildirildi.",
      "section": "Turizm Haberleri"
    },
    {
      "image": "/img/news/1920x1600_cmsv2_1a7bca55-6b36-546c-a0ff-1442235cc406-8341518.webp",
      "slug": makeSlugId("Bulgaristan & Romanya Schengen Ülkesi Oluyor!"),
      "title": "Bulgaristan & Romanya Schengen Ülkesi Oluyor!",
      "summary": "Bulgaristan ve Romanya’nın Schengen Bölgesi’ne dahil edilmesi tartışmaları.",
      "section": "Turizm Haberleri"
    },
    {
      "image": "/img/news/1.jpg",
      "slug": makeSlugId("6 Aylık Turistik Rusya Vizesi Başladı!"),
      "title": "6 Aylık Turistik Rusya Vizesi Başladı!",
      "summary": "6 aylık çok girişli Rusya turistik vizesi uygulamasının başladığı bildirildi.",
      "section": "Turizm Haberleri"
    },
    {
      "image": "/img/news/dubai-vizesi.jpg",
      "slug": makeSlugId("Dubai Vizesi'nde Kısıtlamalar Sona Erdi"),
      "title": "Dubai Vizesi'nde Kısıtlamalar Sona Erdi",
      "summary": "Dubai’ye yönelik vize kısıtlamalarının kaldırıldığı haberi.",
      "section": "Turizm Haberleri"
    }
  ]
}

export default function AnnouncementsAndCampaigns({ stringCatalog }: { stringCatalog: any }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  return (
    <div className={styles.safe_area}>
      <div className="flex flex-col gap-4 items-center mb-10 relative">
        <Text variant="handwriting" className="max-sm:text-center text-balance">{localizedStringAlternate(stringCatalog, "announcements", "_root/nav")}</Text>
        <Text variant="heading" className="max-sm:text-center text-balance">{localizedStringAlternate(stringCatalog, "announcements_description", "_root")}</Text>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start",
            slidesToScroll: 1,
            containScroll: false
          }}
          className="w-full z-2 max-w-screen-xl mx-auto user-select-none"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {data.announcements.map((announcement, index) => (
              <CarouselItem key={announcement.slug} className="basis max-sm:basis-full">
                <div className="p-1">
                  <Link href={`/duyuru-kampanya/p/${announcement.slug}`}>
                    <Card className="shadow-xs rounded-4xl overflow-hidden p-0 gap-3 hover:scale-[1.02] transition-all hover:duration-100 duration-300 cursor-pointer">
                      <CardContent className="flex items-center justify-center p-6 relative overflow-hidden  h-[18rem] rounded-t-4xl">
                        <Image src={announcement.image || ""} alt={announcement.title} fill className="object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col items-center justify-center z-2">
                          <Text variant="heading" className="text-white text-2xl font-bold max-sm:text-center">{announcement.title}</Text>
                          <Text variant="paragraph" className="text-white text-sm max-sm:text-center">{announcement.summary}</Text>
                          <p className="text-white text-sm max-sm:text-center font-medium">Daha Fazla Bilgi</p>
                        </div>
                      </CardContent>

                    </Card>
                    </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-none shadow-none h-full" customIcon={<ArrowCompactLeft />} />
          <CarouselNext className="border-none shadow-none h-full" customIcon={<ArrowCompactRight />} />
        </Carousel>
      </div>
      <div className="flex flex-col gap-4 items-center mb-10 relative">
        <Text variant="handwriting" className="max-sm:text-center text-balance">Turizm Haberleri</Text>
        <Text variant="heading" className="max-sm:text-center">Turizm sektörünü ilgilendiren en son haberleri buradan inceleyebilirsiniz.
        </Text>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start",
            slidesToScroll: 1,
            containScroll: false
          }}
          className="w-full z-2 max-w-screen-xl mx-auto user-select-none"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
              {data.news.map((news, index) => (
                <CarouselItem key={news.title} className="basis-1/3 max-sm:basis-full">
                <div className="p-1">
                  <Card className="shadow-xs rounded-4xl overflow-hidden p-0 gap-3 hover:scale-[1.02] transition-all hover:duration-100 duration-300 cursor-pointer">
                    <CardContent className="flex h-[2rem] items-center justify-center p-6 relative overflow-hidden  h-[18rem] rounded-t-4xl">
                      <Image src={news.image || ""} alt={news.title} fill className="object-cover" />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-center z-2">
                        <Text variant="heading" className="text-white text-2xl font-bold text-center">{news.title}</Text>
                        <Text variant="paragraph" className="text-white text-sm text-center">{news.summary}</Text>
                        <Link href={`/turizm-haberleri/p/${news.slug}`} className="text-white text-sm">Daha Fazla Bilgi</Link>
                       
                      </div>
                    </CardContent>

                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-none shadow-none h-full" customIcon={<ArrowCompactLeft />} />
          <CarouselNext className="border-none shadow-none h-full" customIcon={<ArrowCompactRight />} />
        </Carousel>
      </div>
    </div>
  )
}

const ArrowCompactLeft = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chevron-compact-left text-4xl" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223" />
    </svg>
  )
}
const ArrowCompactRight = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chevron-compact-left text-4xl" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
    </svg>
  )
}