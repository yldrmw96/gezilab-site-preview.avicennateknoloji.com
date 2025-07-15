"use client"
import React from "react";
import Text from "@/components/text";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { MapPinIcon, } from "lucide-react";
import styles from "@/styles/safearea.module.css";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const destinations = [
  {
    title: "İsviçre",
    location: "Zürih",
    image: "/img/trip/dest_2_1.jpg",
    tripCount: 6,
    link: "destination-details.html",
  },
  {
    title: "İspanya",
    location: "Barselona",
    image: "/img/trip/dest_2_2.jpg",
    tripCount: 8,
    link: "destination-details.html",
  },
  {
    title: "Hollanda",
    location: "Amsterdam",
    image: "/img/trip/dest_2_3.jpg",
    tripCount: 6,
    link: "destination-details.html",
  },
  {
    title: "Macaristan",
    location: "Budapeşte",
    image: "/img/trip/dest_2_4.jpg",
    tripCount: 5,
    link: "destination-details.html",
  },
  {
    title: "Maldivler",
    location: "",
    image: "/img/trip/dest_2_5.jpg",
    tripCount: 7,
    link: "destination-details.html",
  },
];


const PopularDestinations = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  return (
    <section className="space" id="trip-sec">
      <div className={cn(styles.safe_area, "relative z-2")}>
        <div className="text-center flex flex-col items-center gap-2 mb-10">
          <Text variant="handwriting">Popüler Rotalar</Text>
          <Text variant="heading">En Gözde Rotalar</Text>
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
            {destinations.map((dest, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 shrink-0">
                <div className="p-1">
                  <Card className="shadow-xs rounded-4xl  overflow-hidden p-0 gap-3 hover:scale-[1.02] transition-all hover:duration-100 duration-300 cursor-pointer">
                    <CardContent className="flex items-center justify-center p-6 relative overflow-hidden  h-[12rem] rounded-t-4xl">
                      <Image src={dest.image} alt={dest.title} fill className="object-cover" />

                    </CardContent>
                    <CardFooter className="flex mb-2 flex-col gap-2">
                      <div className="flex flex-row text-lg justify-start gap-2 items-center w-full">
                        <MapPinIcon width={"1em"} height={"1em"} className="text-primary" />
                        <Text variant="title">{dest.title}</Text>

                      </div>
                      <div className="flex flex-row w-full items-baseline justify-between">
                        <Text variant="paragraphProminent" className="text-left me-auto text-primary">+{dest.tripCount} Gezi</Text>
                      </div>
                    </CardFooter>
                  </Card>
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





export default PopularDestinations;
