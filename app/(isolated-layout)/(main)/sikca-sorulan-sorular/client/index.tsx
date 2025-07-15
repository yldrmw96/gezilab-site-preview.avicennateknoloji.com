"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@components/ui/accordion";

import layoutStyles from "@styles/layout.module.css";
import sssStyles from "@styles/sss.module.css";
import Spacer from "@components/spacer";
import styles from "@styles/safearea.module.css";
import { cn } from "@lib/utils";

import { sss } from "@lib/mock/sss";
import { useLocalizedStringAlternate } from "@lib/localizedStringAlternate";

export default function SikcaSorulanSorularClient({ stringCatalog }: { stringCatalog: any }) {
  // console.log("stringCatalog", stringCatalog);
  return (
    <div className={layoutStyles.main_layout}>
      <Spacer />
      <section className={cn(styles.safe_area, sssStyles.sss_layout)}>
        <h1 className={sssStyles.sss_page_title}>{useLocalizedStringAlternate(stringCatalog, "faq", "_root/nav")}</h1>
        <Accordion type="single" collapsible className={sssStyles.sss_accordion}>
          {sss.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger >{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
} 
