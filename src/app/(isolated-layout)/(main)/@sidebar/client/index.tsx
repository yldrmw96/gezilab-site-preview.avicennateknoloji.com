"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRightIcon, ExternalLinkIcon, GlobeIcon, MapPinIcon, SparklesIcon, TicketIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useSidebar } from "@/store/hooks/sidebar.hook"
import { cn } from "@/lib/utils"
import { allCountries, visas } from "@/lib/mock/navigation-menu/visas"
import { kurumsalSeyahatRoutes } from "@/lib/mock/navigation-menu/kurumsal-seyahat"
import { sirketRoutes } from "@/lib/mock/navigation-menu/sirket"
import { kesfetRoutes } from "@/lib/mock/navigation-menu/kesfet"
import { useRef } from "react"
import Logo from "@/components/logo"
import navStyles from "@/styles/navbar.module.css"
import { links } from "@/lib/links"
import slugify from "react-slugify"
import safeArea from "@/styles/safearea.module.css"
import layoutStyles from "@/styles/layout.module.css"
import { AnimatePresence, motion } from "framer-motion"
import MobileMenuContent from "./mobile"
import { LanguageSelector } from "@/components/language-selector"
import { useStringCatalog } from "@/store/hooks/string-catalog.hook"
import { localizedStringAlternate } from "@/lib/localizedStringAlternate"
import { useLanguage } from "@/store/hooks/language.hook"
import { getStringCatalogSession, setStringCatalogSession, hasStringCatalogSession } from "@/lib/session-storage"

export default function SidebarClient({ stringCatalogFromServer, languages }: { stringCatalogFromServer: any, languages: any }) {
  const { values: { shouldShowBorder, isSidebarOpen }, actions: { setHeaderHeight, setIsSidebarOpen } } = useSidebar();
  const { values: { stringCatalog: storeStringCatalog }, actions: { setStringCatalog } } = useStringCatalog();
  const headerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasInitialized, setHasInitialized] = React.useState(false);
  const { values: { language } } = useLanguage();

  // Server'dan gelen veri varsa onu kullan, yoksa store'dan kullan - flatten yapmaya gerek yok
  const activeStringCatalog = stringCatalogFromServer || storeStringCatalog;
  // Header height'ı set et
  React.useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [setHeaderHeight]);

  // String catalog'u initialize et - render'ı bloklamaz
  React.useEffect(() => {
    if (hasInitialized) return;

    if (stringCatalogFromServer) {
      // Server'dan veri geldi, background'da store ve session'a kaydet
      setStringCatalog(stringCatalogFromServer);
      setStringCatalogSession(stringCatalogFromServer);
      setHasInitialized(true);
    } else {
      // Client-side'da session storage'ı kontrol et
      const sessionData = getStringCatalogSession();
      if (sessionData) {
        setStringCatalog(sessionData);
        setHasInitialized(true);
      } else {
        // Session'da da yoksa API'den çek
        setIsLoading(true);
        fetch('/api/string-catalog', {
          method: 'POST',
          credentials: 'include',
        })
          .then(response => response.json())
          .then(data => {
            if (data?.success) {
              setStringCatalog(data.data);
              setStringCatalogSession(data.data);
              setHasInitialized(true);
            }
          })
          .catch(error => {
            // console.error('String catalog fetch hatası:', error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  }, [stringCatalogFromServer, hasInitialized, setStringCatalog]);
  return (
    <>
      <NavigationMenu viewport={false} ref={headerRef} className={
        cn(
          "sticky bg-background/95 backdrop-blur-xl flex flex-col top-0 !w-full max-w-auto z-20",

          shouldShowBorder && navStyles.navbar_bordered
        )}>

        <div className={cn(safeArea.safe_area,
          "grid grid-cols-[1fr_auto_1fr] relative w-full",
          layoutStyles.navigation_block_padding)}>
          <Logo />

          <NavigationMenuList className="hidden md:flex">

            {/* Vize */}
            <NavigationMenuItem key={"vize-menu"} >
              <NavigationMenuTrigger  >
                {localizedStringAlternate(activeStringCatalog, "quick_visa", "_root/nav")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col [&>ul>span[role='heading']]:pt-4">
                  <ul className="grid w-[400px] gap-1  md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <span role="heading" aria-level={2} className="text-sm font-medium text-muted-foreground col-span-2 px-2">Vizeler</span>
                    {visas.map((vize) => (
                      <ListItem key={vize.id} href={vize.path} title={vize.name} icon={<TicketIcon className="text-primary shrink-0" />} />
                    ))}
                    <ListItem key={"all-visas"} href={links.visas()} title={"Tüm Vizeler"} icon={<ArrowRightIcon className="text-primary shrink-0" />} />
                  </ul>
                  <ul className="grid w-[400px] gap-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <span role="heading" aria-level={2} className="text-sm font-medium text-muted-foreground col-span-2 px-2">Tüm Ülkeler</span>

                    {/* {allCountries.map((country) => (
                      <ListItem key={country.name} href={links.region(slugify(country.slug))} title={country.name} icon={<GlobeIcon className="text-primary shrink-0" />} />
                    ))} */}
                    <ListItem key={"all-countries"} href={links.regions()} title={"Tüm Ülkeler"} icon={<ArrowRightIcon className="text-primary shrink-0" />} />
                  </ul>

                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Kurumsal Seyahat */}
            <NavigationMenuItem key={"kurumsal-seyahat-menu"}>
              <NavigationMenuTrigger  >
                {localizedStringAlternate(activeStringCatalog, "corporate_travel", "_root/nav")}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col [&>ul>span[role='heading']]:pt-4">
                <ul className="grid w-[400px] gap-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <span role="heading" aria-level={2} className="text-sm font-medium text-muted-foreground col-span-2 px-2">Kurumsal Seyahat</span>
                  {kurumsalSeyahatRoutes.map((route) => (
                    <ListItem key={route.name} href={route.path} title={route.name} icon={<TicketIcon className="text-primary shrink-0" />} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>


            {/* Turlar */}
            <NavigationMenuItem key={"turlar-menu"}>
              {/* make before content for small bottom circle  */}
              <NavigationMenuTrigger className="!leading-none " >
                {localizedStringAlternate(activeStringCatalog, "tours", "_root/nav")}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col [&>ul>span[role='heading']]:pt-4">

                <ul className="grid w-[400px] gap-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <span role="heading" aria-level={2} className="text-sm font-medium text-muted-foreground col-span-2 px-2">{localizedStringAlternate(activeStringCatalog, "tours", "_root/nav")}</span>
                  {[
                    {
                      name: "Bilim Turları",
                      slug: "bilim-turlari",
                      title: "Bilim Turları",
                      icon: <MapPinIcon className="text-primary shrink-0" />,
                      path: "/turlar/bilim-turlari"
                    },
                    {
                      name: "Kültür Turları",
                      slug: "kultur-turlari",
                      title: "Kültür Turları",
                      icon: <MapPinIcon className="text-primary shrink-0" />,
                      path: "/turlar/kultur-turlari"
                    },
                    {
                      name: "Yurt Dışı Turları",
                      slug: "yurt-disi-turlari",
                      title: "Yurt Dışı Turları",
                      icon: <MapPinIcon className="text-primary shrink-0" />,
                      path: "/turlar/yurt-disi-turlari"
                    },
                    {
                      name: "Gemi Turları",
                      slug: "gemi-turlari",
                      title: "Gemi Turları",
                      icon: <MapPinIcon className="text-primary shrink-0" />,
                      path: "/turlar/gemi-turlari"
                    }
                  ].map((tour) => (
                    <ListItem key={tour.slug} href={tour.path} title={tour.title} icon={tour.icon} />
                  ))}
                  <ListItem key={"all-tours"} href={"/turlar"} title={"Tüm Turları Görüntüle"} icon={<ArrowRightIcon className="text-primary shrink-0" />} />
                  <ListItem key={"tur-kesfet"} href={"/turlar"} title={localizedStringAlternate(activeStringCatalog, "discover", "_root/nav")} icon={<SparklesIcon className="text-primary shrink-0" />} />
                </ul>

              </NavigationMenuContent>
            </NavigationMenuItem>



            {/* Sirket */}
            <NavigationMenuItem key={"sirket-menu"}>
                            <NavigationMenuTrigger  >
                {
                     localizedStringAlternate(activeStringCatalog, "company", "_root/nav")
                }
              </NavigationMenuTrigger>
              <NavigationMenuContent >

                <ul className="grid w-fit text-nowrap  gap-2 ">
                  {[
                    {
                      id: 1,
                      name: localizedStringAlternate(activeStringCatalog, "about_us", "_root/nav"),
                      path: "/sirket/hakkimizda",
                    },
                    {
                      id: 2,
                      name: "Ekibimiz",
                      path: "/sirket/ekibimiz",
                    },
                    {
                      id: 3,
                      name: "Ödeme ve Fatura Bilgileri",
                      path: "/sirket/odeme-ve-fatura-bilgileri",
                    },
                  ].map((route) => (
                    <ListItem key={route.name} href={route.path} title={route.name} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Kesfet */}
            <NavigationMenuItem key={"kesfet-menu"}>
              <NavigationMenuTrigger  >
                {localizedStringAlternate(activeStringCatalog, "discover", "_root/nav")}
              </NavigationMenuTrigger>
              <NavigationMenuContent >

                <ul className="grid w-fit text-nowrap  gap-2  ">
                                     {[
                     {
                       id: 1,
                       name: localizedStringAlternate(activeStringCatalog, "faq", "_root/nav"),
                       path: "/sikca-sorulan-sorular",
                     },
                     {
                       id: 2,
                       name: localizedStringAlternate(activeStringCatalog, "announcements", "_root/nav"),
                       path: "/duyuru-ve-kampanyalar",
                     },
                     {
                       id: 3,
                       name: localizedStringAlternate(activeStringCatalog, "tourism_news", "_root/nav"),
                       path: "/turizm-haberleri",
                     },
                   ].map((route) => (
                    <ListItem key={route.name} href={route.path} title={route.name} className="" />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

                        {/* Bize Ulaşın */}
            <NavigationMenuItem key={"bizeulasin-menu"}>
              <NavigationMenuTrigger  >
                 {localizedStringAlternate(activeStringCatalog, "contact-us", "_root/nav")}
              </NavigationMenuTrigger>
              <NavigationMenuContent >
                <ul className="grid w-fit text-nowrap  gap-2 ">
                                      {[{
                     // TODO: iletisim yapılacak
                     name: localizedStringAlternate(activeStringCatalog, "contact-us", "_root/nav"),
                     path: links.contact(),
                   },
                  {
                    name: "Kurumsal Teklif Al",
                    path: links.corporateOffer(),
                  },
                  {
                    name: "Acentelik Başvurusu",
                    path: links.acentelikBasvurusu(),
                  },
                  {
                    name: "İş Başvurusu",
                    path: links.jobApplication(),
                  },
                  ].map((route) => (
                    <ListItem key={route.name} href={route.path} title={route.name} />
                  ))}

                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>




          </NavigationMenuList>
          <div className="flex justify-end gap-2 w-full">
            <Button variant="ghost" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="injected-svg !text-3xl !w-[1em] !h-[1em] shrink-0" role="img" color="#000000">
                <path d="M4 8.5L20 8.5" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 15.5L20 15.5" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <Button className="border border-primary rounded-md hidden md:block">
              <Link href="https://forms.monday.com/forms/fabf111fe685b45e8f9e5c4ba70393d2?r=euc1" target="_blank" className="flex items-center gap-2 font-bold !leading-none ">

                {localizedStringAlternate(activeStringCatalog, "request_from_us", "_root")}
                <ExternalLinkIcon width={"1em"} height={"1em"} />
              </Link>
            </Button>
            <LanguageSelector languages={languages} />
          </div>
        </div>

      </NavigationMenu>
      <AnimatePresence >

        {isSidebarOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              backdropFilter: "blur(0px)"
            }}
            animate={{ opacity: 1, height: "100vh", backdropFilter: "blur(var(--blur-xl))" }}
            exit={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}

            className="fixed top-0 left-0 right-0 w-full h-full bg-background/80  z-[1000] overflow-hidden">
            <MobileMenuContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ListItem({
  title,
  children,
  className,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string, icon?: React.ReactNode, className?: string }) {
  const pathname = usePathname();
  return (
    <li {...props}>
      <NavigationMenuLink asChild >
        <Link href={href} data-active={pathname === href} className={cn("flex items-center gap-2 flex-row data-[active=true]:text-primary data-[active=true]:!bg-transparent !leading-none", className)}>
          {icon && icon}
          <div className="text-sm leading-none font-medium">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}