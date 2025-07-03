
import Copyright from "@/components/copyright";
import Text from "@/components/text";
import { memo } from "react";
import styles from "@/styles/footer.module.css";
import safeArea from "@/styles/safearea.module.css";
import { cn } from "@/lib/utils";
import layoutStyles from "@/styles/layout.module.css";
import { getStrCatalogOnce } from "@/lib/getStrCatalogOnce";

export default async function Footer() {
  const stringCatalog = await getStrCatalogOnce();
  return (
    <footer className={styles.footer}>

      <div className={cn(safeArea.safe_area, styles.footer_area, layoutStyles.navigation_block_padding)}>

        <div className="flex items-center justify-between gap-2 py-4 w-full max-sm:flex-col max-sm:items-start">
          <Text variant="paragraph" className="text-sm text-balance max-sm:text-center">
            Yurtiçi Oteller, Kültür Turları, Uçak Biletleri, Yurtdışı Turlar ve Organizasyon Hizmetleri için 2009’dan bugüne hizmetinizdeyiz.


          </Text>
          <a className="flex items-center gap-2 max-sm:mx-auto" href="https://www.tursab.org.tr/tr/ddsv" target="_blank">
            <img height="60" width="auto" className="!h-[4em]" src="https://cdn.trav3l.net/www.gezgintur.com/images/logo/logo_1724239743.png" />

          </a>
        </div>

        <div className="flex flex-col gap-4 items-center justify-between w-full">
          <Copyright brand="Avicenna Teknoloji" stringCatalogFromServer={stringCatalog} />

        </div>
      </div>
    </footer>
  );
}
