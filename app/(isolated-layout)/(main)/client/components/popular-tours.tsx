"use client"
import React from "react";
import styles from "@styles/safearea.module.css";
import { cn } from "@lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../../../components/ui/carousel";
import { Card, CardContent, CardFooter } from "../../../../../components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../../../../../components/ui/button";
import { ArrowRightIcon, ClockIcon, MapPinIcon, StarIcon, UsersRound } from "lucide-react";
import Text from "../../../../../components/text";
import Link from "next/link";

const tours = [
  {
    id: 1,
    image: "/img/trip/tour_1_1.jpg",
    location: "Madrid, İspanya",
    title: "Brooklyn Plaj Tatili Turu",
    duration: "10 Gün",
    participants: "50+",
    price: "$250",
    link: "tour-details.html",
  },
  {
    id: 2,
    image: "/img/trip/tour_1_2.jpg",
    location: "Chumphon, Tayland",
    title: "Pak Chumphon Şehir Turu",
    duration: "12 Gün",
    participants: "70+",
    price: "$450",
    link: "tour-details.html",
  },
  {
    id: 3,
    image: "/img/trip/tour_1_3.jpg",
    location: "Las Vegas, ABD",
    title: "Bali Macera Turu",
    duration: "7 Gün",
    participants: "52+",
    price: "$350",
    link: "tour-details.html",
  },
  {
    id: 4,
    image: "/img/trip/tour_1_4.jpg",
    location: "Barselona, İspanya",
    title: "Kasım Ayı Tatil Rotaları",
    duration: "13 Gün",
    participants: "100+",
    price: "$550",
    link: "tour-details.html",
  },
  {
    id: 5,
    image: "/img/trip/tour_1_5.jpg",
    location: "Las Vegas, ABD",
    title: "Brooklyn Noel Işıkları",
    duration: "15 Gün",
    participants: "312+",
    price: "$600",
    link: "tour-details.html",
  },
];


const PopularToursSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  return (
    <section className={cn(styles.safe_area, "relative")}>
      <div className="absolute inset-0 w-full h-full bg-cover bg-center z-1 grid grid-cols-3" >
        <div className="col-span-1 bg-cover bg-center col-start-3" style={{
          backgroundImage: "url('/img/bg/tour_bg_1.jpg')",
          mask: "linear-gradient(90deg, transparent , black 108%,black 90%)"
        }}>

        </div>
      </div>

      <div className={cn("relative z-2")}>
        <div className="flex flex-col justify-center items-center mb-10">
          <div className="text-center flex flex-col items-center gap-2 mb-10">
            <Text variant="handwriting">Öne Çıkan Turlar</Text>
            <Text variant="heading">En Popüler Turlar</Text>
          </div>
          <div className="col-auto">
            <Link href="/turlar">
              <Button className="font-bold">
                Tüm Turları Gör
                <ArrowRightIcon width={"1em"} height={"1em"} />
              </Button>
            </Link>
          </div>
        </div>

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
            {tours.map((tour, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 shrink-0">
                <div className="p-1">
                  <Link href={`/tur/${tour.id}`}>
                    <Card className="shadow-xs rounded-4xl shining-card overflow-hidden p-0 gap-4 hover:scale-[1.02] transition-all hover:duration-100 duration-300 cursor-pointer">
                      <CardContent className="flex items-center justify-center p-6 relative overflow-hidden h-[12rem] rounded-t-4xl">
                        <Image src={tour.image} alt={tour.title} fill className="object-cover" />
                      </CardContent>
                      <CardFooter className="flex mb-2 flex-col gap-2">
                        <div className="flex flex-row justify-between items-center w-full">
                          <MapPinIcon width={"1em"} height={"1em"} className="text-primary" />
                          <Text variant="paragraph">{tour.location}</Text>

                          <div className="flex flex-row items-center justify-center">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                width={"1em"}
                                height={"1em"}
                                className="text-primary"
                              />
                            ))}
                          </div>
                        </div>
                        <Text variant="title" className="text-left me-auto">{tour.title}</Text>
                        <div className="flex flex-row w-full items-center justify-between">
                          <div className="flex flex-row gap-2 items-center justify-center">
                            <ClockIcon width={"1em"} height={"1em"} className="text-primary" />
                            <Text variant="paragraph">{tour.duration}</Text>

                          </div>
                          <div className="flex flex-row gap-2 items-center justify-center">
                            <UsersRound width={"1em"} height={"1em"} className="text-primary" />
                            <Text variant="paragraph">{tour.participants}</Text>

                          </div>

                        </div>
                        <div className="flex flex-row w-full items-center justify-between">
                          <Text variant="paragraphProminent" className="text-left me-auto text-primary">{tour.price}</Text>
                          <Button className="font-bold rounded-4xl">
                            Detayları Gör
                            <ArrowRightIcon width={"1em"} height={"1em"} />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  );
};

export default PopularToursSection;