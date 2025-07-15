"use client"

import { cn } from "@lib/utils";
import safeArea from "@styles/safearea.module.css";
import { vizeUlkeler } from "@lib/mock/vize/vize-ulkeler";
import Spacer from "../../../../../../components/spacer";
import { useState } from "react";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { ArrowRightIcon, GridIcon, ListIcon, SearchIcon } from "lucide-react";
import { useSidebar } from "@store/hooks/sidebar.hook";
import Link from "next/link";
import slugify from "react-slugify";
import layoutStyles from "@styles/layout.module.css";
import { bolgeAciklamalari } from "@lib/mock/vize/bolge-aciklamalari";
import bolgelerStyles from "@styles/bolgeler.module.css";
import { links } from "@lib/links";
import { bolgeler } from "@lib/mock/vize/bolgeler";
import ChevronRightCustomIcon from "@components/chevron-right-icon";
import { Image2 } from "@components/image2";


export default function BolgelerClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { values: { headerHeight } } = useSidebar();
  // Arama işlevi
  const filteredUlkeler = vizeUlkeler.filter((ulke) =>
    ulke.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={cn(layoutStyles.main_layout,"[--ignored-safe-area:var(--service-icon-gap)]")}>
      {/* Arama, filtreleme ve görünüm seçenekleri */}
      <div style={{ top: `${headerHeight}px` }} className="sticky top-0 z-10 bg-background border-b backdrop-blur-sm">
        <div className={cn(safeArea.safe_area, "flex flex-col gap-4 sm:flex-row items-center justify-between ")} >
          <div className="relative w-full py-4 ">
            <SearchIcon className="absolute left-[var(--service-icon-gap)] top-1/2 transform -translate-y-1/2 text-gray-400 h-[var(--service-icon-size)] w-[var(--service-icon-size)]" />
            <Input
              type="text"
              placeholder="Ülke adı ile ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 !text-base ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none !border-none shadow-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <GridIcon className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <ListIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
     </div>
      <div className={cn(safeArea.safe_area, "flex flex-col gap-4 mt-4 gap-y-10 !h-auto")}>
        {bolgeler.map((bolge, index) => (

          <div key={index} className="flex flex-col gap-4 relative">
            <div className=" py-2 bg-background/90 flex flex-col gap-1.5 backdrop-blur-sm" >
              <div className="flex items-center gap-4">
                <Link href={links.region(slugify(bolge))} className="cursor-pointer !bg-transparent flex items-center gap-[var(--service-icon-gap)] hover:bg-transparent">
                  <h2 className="text-transparent bg-clip-text font-extrabold bg-gradient-to-t from-foreground/90 via-foreground/90 to-foreground text-xl indent-[var(--service-icon-gap)]">{bolge} Ülkeleri</h2>
                  <ChevronRightCustomIcon className="text-primary shrink-0 !text-[length:var(--service-icon-size)]" width={"1em"} height={"1em"} />
                </Link>
                <span className="text-sm text-gray-500">Tümünü Gör ({vizeUlkeler.filter((ulke) => ulke.hasOwnProperty("region") && ulke.region === bolge).length} Ülke)</span>
              </div>
              <p className={cn(bolgelerStyles.bolge_section_description,"px-[var(--service-icon-gap)] opacity-60")}>{bolgeAciklamalari[bolge]}</p>

            </div>
            <div className="grid grid-cols-5 gap-4 gap-y-2">
              {vizeUlkeler.filter((ulke) => ulke.hasOwnProperty("region") && ulke.region === bolge).slice(0, 5).map((ulke, index) => (
                <Link href={links.visa(slugify(ulke.title))} key={index} className="cursor-pointer !bg-transparent"> 
                <div className="flex cursor-pointer flex-col items-start text-start gap-2 rounded-lg group hover:ring-2 hover:ring-primary/20">
                  <div className="relative min-h-[5rem] w-full !h-20 overflow-hidden rounded-md">
                    <div className="absolute top-[var(--service-icon-gap)] left-[var(--service-icon-gap)] w-[var(--service-icon-size)] z-3 rounded-md overflow-hidden h-[var(--service-icon-size)] flex items-center justify-center">
                      <Image2 src={ulke.icon} alt={ulke.title} fill className="object-contain z-1 " />
                    </div>
                      <Image2 src={ulke.image} alt={ulke.title} fill className="object-cover group-hover:scale-110 transition-all duration-300" />
                    <div className="flex flex-col bg-gradient-to-t from-black/90 to-transparent gap-2 absolute bottom-0 left-0 right-0 p-[var(--service-icon-gap)]">
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-2 w-full">
                  <h5 className={cn(bolgelerStyles.bolge_card_heading,"indent-[var(--service-icon-gap)]")}>{ulke.title}</h5>
                      <ArrowRightIcon className={cn("w-[var(--service-icon-size)] h-[var(--service-icon-size)] text-primary shrink-0")} />
</div>
                </div>
                </Link>
              ))}
            </div>
            <hr className="w-full border-dashed border-gray-200" />

          </div>
        ))}
      </div>
      <Spacer />
      <h1 className="text-2xl font-bold max-w-screen-xl w-full mx-auto mb-5">Tüm Ülkeler</h1>

     

      {/* Grid görünümü */}
      {viewMode === "grid" && (
        <div className={cn(safeArea.safe_area, bolgelerStyles.bolgeler_grid_view_layout)}>
          {filteredUlkeler.map((ulke, index) => (
            <div key={index} className="bg-background relative cursor-pointer overflow-hidden h-[5rem] rounded-lg shadow-xs border border-gray-200 group">
              <div className="absolute !left-[var(--service-icon-gap)] !top-[var(--service-icon-gap)] w-[1.5rem] z-3 rounded-md overflow-hidden h-[1.5rem] flex items-center justify-center">
                <Image2 src={ulke.icon} alt={ulke.title} fill className="object-contain z-1" />
              </div>
              <Image2 src={ulke.image} alt={ulke.title} fill className="object-cover z-1 
              " />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30 z-2 flex items-center justify-center">
                <h2 className=" font-bold text-center text-white z-2">{ulke.title}</h2>
                <ArrowRightIcon className="w-[1.5em] h-[1.5em] max-w-0 group-hover:max-w-full  transition-all duration-300 text-white opacity-0 group-hover:opacity-100 z-30" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Liste görünümü */}
      {viewMode === "list" && (
        <div className={cn(safeArea.safe_area, bolgelerStyles.bolgeler_list_view_layout)}>
          {filteredUlkeler.map((ulke, index) => (
            <div key={index} className="bg-background flex items-center gap-4 rounded-lg  border-gray-200 ">
              <div className="relative w-20 h-10 min-w-20 min-h-10 overflow-hidden rounded-md flex items-center justify-center">
                <Image2 src={ulke.image} alt={ulke.title} fill className="object-cover" />
                <div className="absolute top-[0.3rem] left-[0.3rem] w-[1.5rem] z-3 rounded-md overflow-hidden h-[1.5rem] flex items-center justify-center">
                  <Image2 src={ulke.icon} alt={ulke.title} fill className="object-contain z-1" />
                </div>
              </div>
              <h2 className="font-medium">{ulke.title}</h2>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}