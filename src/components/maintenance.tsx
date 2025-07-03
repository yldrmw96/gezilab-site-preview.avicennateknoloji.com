"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { cva } from "class-variance-authority"

const variants = cva("", {
  variants: {
    variant: {
      default: "shadow-none border-none !bg-accent gap-2",
      flat: "shadow-none border-none !bg-transparent p-0 gap-0",
    },
  },
})

export function Maintenance(
  { 
    title = "Bu Bölüm Geçici Olarak Hizmet Dışı",
    description = "Size daha iyi bir deneyim sunabilmek için sistemimizi güncelliyoruz",
    variant = "default"
  }: 
  {
    variant?: "default" | "flat",
    title?: string,
    description?: string,
  }
) {
  const router = useRouter();
  return (
    <div className="w-full max-w-screen-xl mx-auto mt-10 max-sm:px-[var(--service-icon-size)]">
      <Card className={variants({ variant: variant })}>
        <CardHeader className="text-center pb-4">

          <CardTitle className="text-2xl font-bold text-gray-800 text-balance">{title}</CardTitle>
          <p className="text-gray-600 mt-2 text-balance">{description}</p>
        </CardHeader>

        <CardContent className="space-y-6">


          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="flex-1 bg-background rounded-sm" onClick={() => router.refresh()}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Sayfayı Yenile
            </Button>

          </div>

          <p className="text-center text-sm text-gray-500 text-balance mx-auto">
            Anlayışınız için teşekkür ederiz. Sorularınız için{" "}
            <Link href="mailto:info@avicennateknoloji.com.tr" className="text-blue-600 hover:underline">
              destek ekibimizle
            </Link>{" "}
            iletişime geçebilirsiniz.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
