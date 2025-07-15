"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent, CardFooter } from "../../../../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../../components/ui/carousel"
import Image from "next/image"
import Text from "../../../../../components/text"
import styles from "@styles/safearea.module.css";
import Link from "next/link";
import { cn } from "@lib/utils"

const categories = [
  {
    "image": "trip/cat_1_1.jpg",
    "title": "Macera",
    "tripCount": 12,
    "link": "/turlar",
    "searchTerm": "macera"
  },
  {
    "image": "trip/cat_1_2.jpg",
    "title": "Plajlar",
    "tripCount": 22,
    "link": "/turlar",
    "searchTerm": "plaj"
  },
  {
    "image": "trip/cat_1_3.jpg",
    "title": "Tekne Turu",
    "tripCount": 30,
    "link": "/turlar",
    "searchTerm": "tekne"
  },
  {
    "image": "trip/cat_1_4.jpg",
    "title": "Şehir Turu",
    "tripCount": 13,
    "link": "/turlar",
    "searchTerm": "şehir"
  },
  {
    "image": "trip/cat_1_5.jpg",
    "title": "Doğa Yürüyüşü",
    "tripCount": 32,
    "link": "/turlar",
    "searchTerm": "doğa"
  },
  {
    "image": "trip/cat_1_6.jpg",
    "title": "Tatil Köyü",
    "tripCount": 12,
    "link": "/turlar",
    "searchTerm": "tatil"
  },
  {
    "image": "trip/cat_1_7.jpg",
    "title": "Kültürel / Dini Turlar",
    "tripCount": 7,
    "link": "/turlar",
    "searchTerm": "kültür"
  }
]


export function DestinationCategories() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <div className={styles.safe_area}>
      <div className="flex flex-col gap-4 items-center mb-10">
        <Text variant="handwriting">Tatilini Tarzına Göre Planla...</Text>
        <Text variant="heading">Browse By Destination Category</Text>

      </div>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
          align: "start",
          slidesToScroll: 1,
          containScroll: false
        }}
        className="w-full max-w-screen-xl mx-auto user-select-none"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-1">
          {categories.map((category, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 shrink-0">
              <div className="p-1">
                <Link href={`${category.link}?search=${category.searchTerm}`}>
                  <Card className="shadow-xs rounded-4xl shining-card overflow-hidden p-0 gap-0 cursor-pointer hover:scale-[1.02] transition-all hover:duration-100 duration-300">
                    <CardContent className="flex aspect-square items-center justify-center p-6 relative overflow-hidden h-[12rem]">
                      <Image src={"/img/" + category.image} alt={category.title} fill className="object-cover" />
                    </CardContent>
                    <CardFooter className="border-t-[0.5rem]">
                      <div className="flex truncate text-ellipsis line-clamp-1 py-2 flex-col items-center justify-center w-full h-full user-select-none">
                        <span className="font-semibold text-center text-lg">{category.title}</span>
                        <span className="bg-primary text-sm border font-bold leading-none px-1.5 py-1 rounded-full text-center text-white border-primary">{category.tripCount} Tur</span>
                      </div>
                    </CardFooter>
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