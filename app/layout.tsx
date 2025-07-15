
import type { Metadata } from "next";
import { Dancing_Script, Geist, Geist_Mono, Inter, Poppins, Roboto, Nunito } from "next/font/google";
import "@styles/globals.css";
import styles from "@styles/layout.module.css";
import { cn } from "@lib/utils";

// TODO: Geliştirme bittiğinde gereksiz fontları kaldır.

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME,
  description: process.env.NEXT_PUBLIC_SITE_NAME
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html
      lang="tr"
      className={cn(styles.html, "relative")}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={cn(styles.body, geistSans.variable, geistMono.variable, dancingScript.variable, inter.variable, poppins.variable, roboto.variable, nunito.variable)}
      >

        {children}

      </body>

    </html>
  );
}
