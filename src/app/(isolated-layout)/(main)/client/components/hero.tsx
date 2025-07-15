"use client"
import { SearchCommand } from "@/components/search-command";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PlaneTakeoffIcon } from "lucide-react";
import Image from "next/image";
import styles from "@/styles/safearea.module.css";
import { cn } from "@/lib/utils";
import { useLocalizedStringAlternate } from "@/lib/localizedStringAlternate";
export default function Hero({ stringCatalog }: { stringCatalog: any }) {
  return (
    <div className={cn(styles.safe_area, "flex flex-col items-center justify-center shrink-0 grow rounded-4xl border bg-muted !h-[35rem] overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-1 hero-radial-gradient !max-w-screen-2xl")}>
      <div className="absolute bottom-0 right-0 w-full h-full">
        <Image src="/hero_bg_2_1.jpg" alt="Hero Image" fill className="object-cover w-full h-full max-sm:object-right" />
      </div>
      <div className="absolute z-2 top-0 left-10 ">
        <Image
          aria-hidden
          src="/partials/cloud_2.png"
          alt="File icon"
          className="cloud-animation animation-delay-800 !animation-duration-9000 -translate-x-10"
          width={180}
          height={180}
        />
        <Image
          aria-hidden
          src="/partials/cloud_2.png"
          alt="File icon"
          className="cloud-animation -animation-delay-400 !animation-duration-9000 -translate-x-10"
          width={180}
          height={180}
        />
        <Image
          aria-hidden
          src="/partials/cloud_1.png"
          alt="File icon"
          className="cloud-animation"
          width={180}
          height={180}
        />
        <Image
          aria-hidden
          src="/partials/cloud_2.png"
          alt="File icon"
          className="cloud-animation animation-delay-400 !animation-duration-9000 -translate-x-10"
          width={180}
          height={180}
        />
      </div>

      <div className="absolute z-2 bottom-0 left-10 ">
        <Image
          aria-hidden
          src="/partials/tree_1.svg"
          alt="File icon"
          className="tree-animation"
          width={180}
          height={180}
        />


      </div>

      <div className="absolute z-2 bottom-0 left-120 ">
        <Image
          aria-hidden
          src="/partials/tree_2.svg"
          alt="File icon"
          className="tree-animation"
          width={180}
          height={180}
        />


      </div>


      <div className="grid grid-cols-2 z-2  max-sm:grid-cols-1 w-full h-full max-w-screen-xl">
        <div className="flex flex-col gap-4 items-start justify-center h-full shrink-0 grow" >
          <span className="text-white font-[family-name:var(--font-dancing-script)] text-2xl font-bold">{useLocalizedStringAlternate(stringCatalog, "slogan", "_root")}</span>
          <h1 className="text-4xl font-bold text-white">{useLocalizedStringAlternate(stringCatalog, "hero_title", "_root")}</h1>
          {/* <p className="text-white font-bold">Müşterilerimize seyahat ederken mümkün olan en fazla seçeneği sunarak mutlu etmeyi hedefliyoruz.
          </p> */}
          <SearchCommand stringCatalog={stringCatalog} />

          <div className="gap-4 items-start justify-start grid grid-cols-2 w-full" >

            <Button size="lg" className="font-bold flex flex-row items-center justify-center col-span-1 row-start-2" >

              <span className="text-white">
                {useLocalizedStringAlternate(stringCatalog, "tours", "_root/nav")}
              </span>
              <PlaneTakeoffIcon className="w-4 h-4" />

            </Button>
            <Button size="lg" variant="ghost" className="bg-white font-bold flex flex-row items-center justify-center col-span-1 row-start-2 hover:bg-white/90 cursor-pointer !text-primary" >
              <span >
                {useLocalizedStringAlternate(stringCatalog, "get_contact", "_root/nav")}
              </span>
              <ArrowRightIcon />
            </Button>
          </div>

        </div>
      </div>


    </div>
  );
}