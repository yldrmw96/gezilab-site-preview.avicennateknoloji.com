"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Text from "@/components/text";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import styles from "@/styles/safearea.module.css";

const visas = [

  {
    title: "Rusya Vizesi",
    description: "Rusya vizesi işlemleri",
    image: "/img/visas/dormition-cathedral-vladimir-winter_1398-549.jpg",
    flag: RussianFlag,
  },

  {
    title: "Dubai Vizesi",
    description: "Dubai vizesi işlemleri",
    image: "/img/visas/portrait-woman-visiting-luxurious-city-dubai_23-2151328510.jpg",
    flag: DubaiFlag,
  },

  {
    title: "Bulgaristan Vizesi",
    description: "Bulgaristan vizesi işlemleri",
    image: "/img/visas/aerial-drone-wide-view-historic-centre-sibiu-romania_1268-20609.jpg",
    flag: BulgarianFlag,
  },

  {
    title: "İngiltere Vizesi",
    description: "İngiltere vizesi işlemleri",
    image: "/img/visas/london-bridge_53876-31649.jpg",
    flag: BritishFlag,
  },

  {
    title: "Fransa Vizesi",
    description: "Fransa vizesi işlemleri",
    image: "/img/visas/sunset-view-eiffel-tower-from-paris_188544-23753.jpg",
    flag: FrenchFlag,
  },

  {
    title: "İtalya Vizesi",
    description: "İtalya vizesi işlemleri",
    image: "/img/visas/beautiful-shot-famous-roman-colosseum-amphitheater-breathtaking-sky-sunrise_181624-6998.jpg",
    flag: ItalianFlag,
  },
];

export default function Visas() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  return (
    <div className={styles.safe_area}>
      
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
          {visas.map((visa, index) => (
            <CarouselItem key={index} className="pl-1 basis-1/4 md:basis-1/4">
              <div className="p-1">
                <Card className="shadow-xs rounded-4xl relative overflow-hidden p-0 gap-0">
                  <CardContent className="bg-accent flex aspect-square items-center justify-center p-6 relative overflow-hidden  h-[12rem]">
                    <visa.flag className="absolute top-0 right-0 w-[2em] h-[2em] z-10 m-4 rounded-md" />
                    <Image src={visa.image} alt={visa.title} fill className="object-cover z-1" />



                      <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-2 ">
                        <Text variant="heading" className="text-white text-xl mb-3 font-bold mt-auto">{visa.title}</Text>
                      </div>

                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />  
      </Carousel>
    </div>
  );
}


function FrenchFlag({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-fr" viewBox="0 0 512 512" className={className}>
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#002654" d="M0 0h170.7v512H0z" />
      <path fill="#ce1126" d="M341.3 0H512v512H341.3z" />
    </svg>
  );
}

function ItalianFlag({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-it" viewBox="0 0 512 512" className={className}>
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h512v512H0z" />
        <path fill="#009246" d="M0 0h170.7v512H0z" />
        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
      </g>
    </svg>
  );
}
function BritishFlag({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" viewBox="0 0 512 512" className={className}>
      <path fill="#012169" d="M0 0h512v512H0z" />
      <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z" />
      <path fill="#C8102E" d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z" />
      <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
      <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
    </svg>
  );
}

function RussianFlag({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-ru" viewBox="0 0 512 512" className={className}>
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h512v512H0z" />
        <path fill="#0039a6" d="M0 170.7h512V512H0z" />
        <path fill="#d52b1e" d="M0 341.3h512V512H0z" />
      </g>
    </svg>
  );
}

function BulgarianFlag({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-bg" viewBox="0 0 512 512" className={className}>
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#d62612" d="M0 341.3h512V512H0z" />
        <path fill="#fff" d="M0 0h512v170.7H0z" />
        <path fill="#00966e" d="M0 170.7h512v170.6H0z" />
      </g>
    </svg>
  );
}

function DubaiFlag({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-ae" viewBox="0 0 512 512" className={className}>
      <path fill="#00732f" d="M0 0h512v170.7H0z" />
      <path fill="#fff" d="M0 170.7h512v170.6H0z" />
      <path d="M0 341.3h512V512H0z" />
      <path fill="red" d="M0 0h180v512H0z" />
    </svg>
  );
}