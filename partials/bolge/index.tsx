import Spacer from "../../components/spacer";
import { cn } from "@utils/cn";
import safeArea from "@styles/safearea.module.css";
import layoutStyles from "@styles/layout.module.css";
import { bolgeler } from "@lib/mock/vize/bolgeler";
import slugify from "react-slugify";
import { vizeUlkeler as vizeUlkelerMock } from "@lib/mock/vize/vize-ulkeler";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import bolgelerStyles from "@styles/bolgeler.module.css";

export default function BolgeDetail({ bolge }: { bolge: string }) {

  const bolgeData = bolgeler.find((b) => slugify(b) === bolge);
  const vizeUlkeler = vizeUlkelerMock.filter((ulke) => ulke.hasOwnProperty("region") && ulke.region === bolgeData);

  const vizeUlkelerByBolge = vizeUlkeler.filter((ulke) => ulke.region === bolgeData);

  return (
    <section className={cn(layoutStyles.main_layout)}>
      <Spacer />
      <div className={cn(safeArea.safe_area, "flex flex-col gap-4 gap-y-10 !h-auto")}>
        <h1 className="text-2xl font-bold">{bolgeData} Vizesi</h1>
        <div className="grid   sm:grid-cols-2  md:grid-cols-5 gap-4 gap-y-2">
          {vizeUlkelerByBolge.map((ulke, index) => (
            <div key={index} className="flex cursor-pointer flex-col items-start text-start gap-2 rounded-lg group">
              <div className="relative min-h-[22rem] w-full !h-20 overflow-hidden rounded-md">
                <div className="absolute top-[0.3rem] left-[0.3rem] w-[1.5rem] z-3 rounded-md overflow-hidden h-[1.5rem] flex items-center justify-center">
                  <Image src={ulke.icon} alt={ulke.title} fill className="object-contain z-1" />
                </div>
                <Image src={ulke.image} alt={ulke.title} fill className="object-cover" />
                <div className="flex flex-col bg-gradient-to-t from-black/90 to-transparent gap-2 absolute bottom-0 left-0 right-0 p-4">
                  <ArrowRightIcon className={cn("w-[1.5em] h-[1.5em] max-w-0 group-hover:max-w-full  transition-all duration-300 text-white opacity-0 group-hover:opacity-100 z-30")} />
                </div>
              </div>
              <h5 className={cn(bolgelerStyles.bolge_card_heading)}>{ulke.title}</h5>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}