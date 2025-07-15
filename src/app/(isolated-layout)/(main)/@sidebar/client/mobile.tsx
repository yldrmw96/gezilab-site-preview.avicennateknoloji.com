"use client"
import * as React from "react"
import Link from "next/link";
import { useSidebar } from "@/store/hooks/sidebar.hook";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LayoutGroup, AnimatePresence, motion } from "framer-motion";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { kesfetRoutes } from "@/lib/mock/navigation-menu/kesfet";
import { usePathname } from "next/navigation";
import { visas } from "@/lib/mock/navigation-menu/visas"
import { kurumsalSeyahatRoutes } from "@/lib/mock/navigation-menu/kurumsal-seyahat"
import { sirketRoutes } from "@/lib/mock/navigation-menu/sirket"
import { MapPinIcon } from "lucide-react";

const turlar = [
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
]
interface MenuItem {
  id: string;
  title: string;
  children?: MenuItem[];
}
const menuItems: MenuItem[] = [
  { id: "anasayfa", title: "Anasayfa" },
  {
    id: "hizli-vize-al", title: "Hızlı Vize Al", children: [
      ...visas.map((visa) => ({
        id: visa.id.toString(),
        title: visa.name,
        path: visa.path,

      })),
    ]
  },
  {
    id: "kurumsal", title: "Kurumsal Seyahat", children: [
      ...kurumsalSeyahatRoutes.map((route) => ({
        id: route.path,
        title: route.name,
        path: route.path,
      })),
    ]
  },
  {
    id: "turlar", title: "Turlar", children: [
      ...turlar.map((route) => ({
        id: route.path,
        title: route.name,
        path: route.path,
      })),
      {
        id: "tum-turlari",
        title: "Tüm Turları Gör",
        path: "/turlar",
      }
    ]
  },
  {
    id: "sirket", title: "Şirket", children: [
      ...sirketRoutes.map((route) => ({
        id: route.id.toString(),
        title: route.name,
        path: route.path,
      })),
    ]
  },
  {
    id: "kesfet", title: "Keşfet", children: [
      ...kesfetRoutes.map((route) => ({
        id: route.id.toString(),
        title: route.name,
        path: route.path,
      })),
    ]
  },
  {
    id: "bize-ulasin", title: "Bize Ulaşın"
    , children: [
      {
        id: "iletisim",
        title: "İletişim",
        path: "/iletisim",
      },
      {
        id: "kurumsal-teklif-al",
        title: "Kurumsal Teklif Al",
        path: "/kurumsal-teklif-al",
      },
      {
        id: "acentelik-basvurusu",
        title: "Acentelik Başvurusu",
        path: "/acentelik-basvurusu",
      },
      {
        id: "is-basvurusu",
        title: "İş Başvurusu",
        path: "/is-basvurusu",
      }
    ]
  },
];

export default function MobileMenuContent() {
  const pathname = usePathname();
  const { values: { isSidebarOpen }, actions: { setIsSidebarOpen } } = useSidebar();
  const [currentNavRoute, setCurrentNavRoute] = useState<string | null>(null);
  const [initialPath, setInitialPath] = useState<string>(pathname);
  React.useEffect(() => {
    if (initialPath != pathname) {
      setInitialPath(pathname);
      setCurrentNavRoute(null);
    }
    // console.log(initialPath, pathname)
  }, [pathname]);
  React.useEffect(() => {
    if (initialPath != pathname) {
      setIsSidebarOpen(false);
    }
  }, [pathname]);
  return (
    <div className="w-full h-full flex flex-col items-start justify-center gap-4 relative overflow-hidden">
      <LayoutGroup>

        <div className="relative w-full h-full">
          <div className="w-full flex justify-end h-[72px] items-center py-4 px-4 col-span-1 row-start-1 z-[1005]">

            <AnimatePresence mode="wait">
              {
                currentNavRoute === null && isSidebarOpen && (
                  <motion.div
                    initial={{ opacity: 0, left: "-20%" }}
                    animate={{ opacity: 1, left: "calc(var(--spacing) * 8)" }}
                    exit={{ opacity: 0, left: "-20%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute top-[calc(var(--spacing) * 2)] left-[calc(var(--spacing)*2)] z-[1005]"
                  >


                    <Link href="https://forms.monday.com/forms/fabf111fe685b45e8f9e5c4ba70393d2?r=euc1" target="_blank" className="flex items-center gap-2 font-medium text-primary !leading-none ">

                      Bizden Talep Edin
                      <ExternalLinkIcon width={"1em"} height={"1em"} />
                    </Link>

                  </motion.div>
                )
              }
            </AnimatePresence>
            <AnimatePresence mode="wait">
              {currentNavRoute !== null && (
                <motion.div
                  initial={{ opacity: 0, left: "20%" }}
                  animate={{ opacity: 1, left: "0" }}
                  exit={{ opacity: 0, left: "20%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative z-[1008]"
                >

                  <Button variant="ghost" onClick={() => setCurrentNavRoute(null)} className="text-2xl font-bold px-0 gap-0  text-primary z-[1008]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="injected-svg !text-[length:var(--service-icon-size)] !w-[1em] !h-[1em] shrink-0 z-[1008]" role="img" >
                      <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth={2} strokeMiterlimit={16} />
                    </svg>
                    <span className="sr-only">Geri Dön</span>
                    <span className="text-lg font-medium">Geri Dön</span>
                  </Button>

                </motion.div>
              )}
            </AnimatePresence>
            <Button variant="ghost" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden shrink-0 ms-auto z-[1008]">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="injected-svg !text-2xl !w-[1em] !h-[1em] shrink-0 " role="img" color="#000000">
                <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </Button>
          </div>

          <AnimatePresence mode="wait">

            {currentNavRoute === null && (
              <motion.ul
                key="menu"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-4 p-8"
              >
                {menuItems.map((item) => (
                  <motion.li
                    key={item.id}
                    layoutId={item.id}
                    className="text-2xl font-bold cursor-pointer"
                    onClick={() => setCurrentNavRoute(item.id)}
                  >
                    {item.title}
                  </motion.li>
                ))}
              </motion.ul>

            )}



          </AnimatePresence>
          <AnimatePresence>
            {currentNavRoute !== null && (
              <motion.div
                key="detail"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute overflow-y-auto pt-[72px] top-0 left-0 w-full h-full p-8 bg-background  col-span-1 row-start-2 z-[1002]"
              >
                {/* Shared Element: Başlık */}
                <motion.h1
                  layoutId={currentNavRoute}
                  className="text-4xl font-bold mb-4"
                >
                  {menuItems.find((m) => m.id === currentNavRoute)?.title}
                </motion.h1>

                {
                  menuItems.find((m) => m.id === currentNavRoute) && menuItems.find((m) => m.id === currentNavRoute)?.children ?
                    menuItems.find((m) => m.id === currentNavRoute)?.children?.map((child, index) => (
                      <motion.div
                        key={child.id}
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: "0" }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                          delay: 0.2 * index
                        }}

                        layoutId={child.id}
                        className="text-2xl font-bold cursor-pointer py-4"
                      >
                        <Link href={`${child.id}`} className="flex items-center gap-2 font-medium text-primary !leading-none ">
                          {child.title}
                        </Link>
                      </motion.div>
                    )) : (
                      <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: "0" }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className=" cursor-pointer py-4"
                      >
                        <span>Gösterilecek içerik yok.</span>
                      </motion.div>
                    )}

                {/* … detay içeriği */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </div>
  );
}

/* <svg className="hb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" strokeWidth={0.6} fill="rgba(0,0,0,0)" strokeLinecap="round" style={{ cursor: "pointer" }}>
        <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
          <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
          <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
        </path>
        <rect width="10" height="10" stroke="none">
          <animate dur="2s" id="reverse" attributeName="width" begin="click" />
        </rect>
        <rect width="10" height="10" stroke="none">
          <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
          <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
        </rect>
      </svg> */