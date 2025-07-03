import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-8 text-center gap-4">
      <div className="flex flex-row items-center justify-center gap-2">
        <span className="primary">404</span>
        <span>{"  |  "}</span>

        <span className=" font-[family-name:var(--font-geist-mono)]">SAYFA BULUNAMADI</span>
      </div>

      <p className="max-w-md opacity-80">
        Gezilab'da (neredeyse) her şeyi bulabilirsiniz — görünüşe göre var olmayan bir sayfayı bile. 
        Belki diğer sayfalarımız sizi yeni keşiflere götürebilir?
      </p>
      <Button asChild className="text-sm py-2 h-auto leading-none">
        <Link href="/">Ana Sayfa</Link>
      </Button>
      
    </div>
  );
}