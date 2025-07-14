import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import layoutStyles from "@/styles/layout.module.css";
import sssStyles from "@/styles/sss.module.css";
import Spacer from "@/components/spacer";
import styles from "@/styles/safearea.module.css";
import { cn } from "@/lib/utils";

import { sss } from "@/lib/mock/sss";
import { getStrCatalogOnce } from "@/lib/getStrCatalogOnce";
import { localizedStringAlternate } from "@/lib/localizedStringAlternate";
import SikcaSorulanSorularClient from "./client";

export default async function SikcaSorulanSorularPage() {
  const stringCatalog = await getStrCatalogOnce();
  // console.log("stringCatalog", stringCatalog);
  return (
    <SikcaSorulanSorularClient stringCatalog={stringCatalog} />
  );
} 
