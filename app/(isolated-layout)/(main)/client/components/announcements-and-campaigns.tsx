"use client"
import Text from "../../../../../components/text"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../../../../components/ui/carousel"
import { Card, CardContent } from "../../../../../components/ui/card"
import Image from "next/image"
import React from "react"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
import styles from "@styles/safearea.module.css";
import { useLocalizedStringAlternate } from "@lib/localizedStringAlternate"
import { Image2 } from "../../../../../components/image2"
import { cn } from "@lib/utils"
import Spacer from "../../../../../components/spacer"

export default function AnnouncementsAndCampaigns({ stringCatalog, initialData }: { stringCatalog: any, initialData: any }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  return (
    <div className={styles.safe_area}>
      <div className="flex flex-col gap-2  mb-4 relative">
        <Text variant="handwriting" className="text-balance text-center">{useLocalizedStringAlternate(stringCatalog, "announcements", "_root/nav")}</Text>
        <Text variant="heading" className="text-center text-balance">{useLocalizedStringAlternate(stringCatalog, "announcements_description", "_root")}</Text>
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
            {initialData.announcements.map((announcement: any) => (
              <CarouselItem key={announcement.slug} className="basis-1/2  md:basis-1/3 xl:basis-1/4 shrink-0">
                <div className="p-1">
                  <Link href={`/duyuru-kampanya/p/${announcement.slug}`}>
                    <Card className="shadow-xs rounded-4xl overflow-hidden p-0 gap-3 hover:scale-[1.02] transition-all hover:duration-100 duration-300 cursor-pointer">
                      <CardContent className="flex items-center justify-center relative overflow-hidden  h-[18rem] rounded-t-4xl px-0">
                        <Image src={announcement.image_url || ""} alt={announcement.title} fill className="object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col items-center justify-center z-2">
                          <div className="p-6 flex flex-col gap-2">
                            <Text variant="heading" className="text-white text-2xl font-bold max-sm:text-center">{announcement.title}</Text>
                            <Text variant="paragraph" className="text-white text-sm max-sm:text-center">{announcement.excerpt}</Text>
                            <p className="text-white text-sm max-sm:text-center font-medium hover:underline active:scale-95 transition-all duration-300 active:opacity-70">Detaylara Git</p>
                          </div>
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
      <Spacer />
      <div className="flex flex-col gap-2 mb-4 relative">
        <Text variant="handwriting" className="text-center text-balance">{useLocalizedStringAlternate(stringCatalog, "tourism_news", "_root")}</Text>
        <Text variant="heading" className="text-center">Turizm sektörünü ilgilendiren en son haberleri buradan inceleyebilirsiniz.
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
            {initialData.tourism_news.map((news: any) => {
              return (
                <CarouselItem key={news.title} className="basis-1/3 max-sm:basis-full">
                  <div className="p-1">
                    <Card className="shadow-xs rounded-4xl overflow-hidden p-0 gap-3 hover:scale-[1.02] transition-all hover:duration-100 duration-300 cursor-pointer">
                      <CardContent className="flex items-center justify-center relative px-0 overflow-hidden  h-[18rem] rounded-t-4xl">
                        <Image2
                          src={news.image_url}
                          alt={news.title} fill className="object-cover [&_img]:object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-center z-2 pointer-events-none">
                          <div className="p-6 flex flex-col gap-2 pointer-events-none">

                            <Text variant="heading" className="text-white text-2xl font-bold text-center pointer-events-none">{news.title}</Text>
                            <Text variant="paragraph" className="text-white text-sm text-center pointer-events-none">{news.excerpt}</Text>
                            <p className="text-white font-bold hover:underline active:scale-95 transition-all duration-300 active:opacity-70 text-sm text-center">Okumaya Devam Et</p>
                          </div>
                        </div>
                        <Link href={`/haber/${news.slug}-${news.slug_id}`} className="absolute top-0 left-0 w-full h-full inset-0 pointer-events-auto"></Link>
                      </CardContent>

                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
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
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className={cn("bi bi-chevron-compact-left text-4xl", className)} viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223" />
    </svg>
  )
}
const ArrowCompactRight = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className={cn("bi bi-chevron-compact-left text-4xl", className)} viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
    </svg>
  )
}