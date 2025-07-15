import { cn } from "@/lib/utils";
import safeArea from "@/styles/safearea.module.css";
import Spacer from "@/components/spacer";
import { getVisaBySlug, getVisas } from "@/lib/mock/navigation-menu/visas";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import slugify from "react-slugify";
import { links } from "@/lib/links";
import { Checkbox } from "@/components/ui/checkbox";

export const revalidate = 3600; // 1 saat
export const dynamic = "force-static";



function getVisaDetails(visa: any) {
  return {
    title: visa?.name || "Vize Bilgileri",
    description: `${visa?.name} ile ilgili bilgiler, başvuru süreci, gerekli evraklar ve dikkat edilmesi gereken hususlar hakkında detaylı bilgiye aşağıdan ulaşabilirsiniz.`,
    warning: "Vize başvurularında randevulu sisteme geçildiği için başvuru işlemleriniz hemen ertesi gün yapılamayabilir. Lütfen sayfamızda belirtilen işlem sürelerinin, pasaportunuz işleme verildikten sonraki süreci kapsadığını unutmayınız.",
    sections: [
      { id: "ucret", title: "Vize Ücreti", content: "Vize ücreti ile ilgili bilgiler burada yer alacaktır." },
      { id: "evraklar", title: "Gerekli Evraklar", content: "Vize başvurusu için gerekli evrakların listesi burada yer alacaktır." },
      { id: "sure", title: "Hazırlanma Süresi", content: "Vizenin hazırlanma süresi ve süreç ile ilgili bilgiler burada yer alacaktır." },
      { id: "basvuru", title: "Başvuru Süreci", content: "Vize başvuru süreci ile ilgili bilgiler burada yer alacaktır." },
      { id: "kimler", title: "Kimler Alabilir", content: "Vize başvurusu yapabilecek kişilerle ilgili bilgiler burada yer alacaktır." },
      { id: "dikkat", title: "Dikkat Edilmesi Gerekenler", content: "Vize başvurusu sırasında dikkat edilmesi gereken hususlar burada yer alacaktır." },
    ],
    faq: [
      {
        question: "Vize başvurusunda otel rezervasyonu şart mı?",
        answer: "Evet, vize başvurusunda konaklama belgesi (otel rezervasyonu) gereklidir. Ancak bu rezervasyonu bizden de temin edebilirsiniz."
      },
    ]
  };
}

export async function generateStaticParams() {
  const visas = await getVisas();
  return visas.map((v) => ({ vize: v.slug }));
}


export async function generateMetadata({ params }: { params: Promise<{ vize: string }> }) {
  const { vize } = await params;
  const visa = await getVisaBySlug(vize);
  return {
    title: visa?.name || "Vize Bilgileri",
    description: `${visa?.name} ile ilgili bilgiler ve başvuru süreci.`,
  };
}



export default async function VizePage({ params }: { params: Promise<{ vize: string }> }) {

  const { vize } = await params;
  const visa = await getVisaBySlug(vize);
  const allVisas = await getVisas();

  // Mock data - gerçek projede API'den gelecektir
  const visaDetails = getVisaDetails(visa);

  return (
    <div className={cn(safeArea.safe_area, "")}>



      <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x md:divide-gray-200 md:space-x-4">
        {/* Yan Menü - Diğer Vizeler */}
        <div className="md:col-span-1 max-sm:order-2">
          <div className="sticky top-24">
            <Card className="shadow-none border-none gap-2">
              <CardHeader className="p-0">
                <CardTitle>Vizeler</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1 flex flex-col !divide-y !divide-gray-200">
                  {allVisas.map((v: any) => (
                    <Link
                      href={links.visa(slugify(v.name))}
                      key={v.id}
                    >
                      <div
                        className={cn(
                          "p-2 rounded-md transition-colors flex items-center gap-2",
                          v.slug === vize
                            ? "text-primary font-medium"
                            : "hover:bg-muted hover:underline"
                        )}
                      >
                        <ArrowRightIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{v.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ana İçerik */}
        <div className="md:col-span-3">
          {/* Başlık ve açıklama */}
          <Spacer />
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{visaDetails.title}</h1>
            <p className="text-gray-600 mb-6">{visaDetails.description}</p>

            {/* Uyarı kutusu */}
            <Alert variant="default" className="mb-8 border-none bg-accent border shadow-xs">
              <AlertTitle>
                DİKKAT!</AlertTitle>
              <AlertDescription>{visaDetails.warning}</AlertDescription>
            </Alert>
          </div>

          {/* Bilgi sekmeleri */}
          <Tabs defaultValue="ucret" className="mb-12 hidden">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
              {visaDetails.sections.map((section) => (
                <TabsTrigger className="!text-sm truncate text-ellipsis" key={section.id} value={section.id}>{section.title}</TabsTrigger>
              ))}
            </TabsList>

            {visaDetails.sections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <Card className="shadow-none border-none !p-0">
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{section.content}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Sık sorulan sorular */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Sık Sorulan Sorular</h2>
            <Accordion type="single" collapsible className="w-full">
              {visaDetails.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Başvuru formu */}
          <div className="">
            <Card className="shadow-none border-none">
              <CardHeader className="p-0">
                <CardTitle>Vize Başvuru Formu</CardTitle>
                <CardDescription>Vize başvurunuz için aşağıdaki formu doldurarak hemen başvurabilirsiniz.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ad Soyad *</label>
                      <Input placeholder="Ad Soyad" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">E-posta *</label>
                      <Input placeholder="E-posta adresiniz" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Telefon *</label>
                      <Input placeholder="Telefon numaranız" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Mesajınız</label>
                      <Textarea placeholder="Eklemek istediğiniz bilgiler" />
                    </div>
                    <div className="flex items-start gap-2">
                      <Checkbox id="kvkk" />
                      <label htmlFor="kvkk" className="text-sm">
                        KVKK Aydınlatma Metni&apos;ni okudum, onaylıyorum.
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 md:border-l md:pl-6">
                    <h3 className="text-xl font-semibold">Vize Hizmetimiz Size Nasıl Yardımcı Olabilir?</h3>
                    <p className="text-gray-600">
                      Vize başvurunuzda size özel hizmet sunmak için hazırız. Formu doldurduğunuzda en kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Vize başvuru sürecinizi hızlandırıyoruz</li>
                      <li>Profesyonel ve tecrübeli ekibimizle yanınızdayız</li>
                      <li>Vize ret riskini minimuma indiriyoruz</li>
                      <li>Tüm evrak hazırlama sürecinizde destek oluyoruz</li>
                    </ul>
                    <Button className="mt-4">Gönder</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 