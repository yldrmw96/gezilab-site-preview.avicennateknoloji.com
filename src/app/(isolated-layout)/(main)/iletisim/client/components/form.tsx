import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import styles from "@/styles/contact.module.css"; 
import { cn } from "@/lib/utils";
export default function Form() {
  return (
    <form className={styles.column}>
      <h1 className={cn(styles.title,"indent-[var(--service-icon-gap)]")}>İletişim Formu</h1>
      <p className={cn(styles.subtitle,"px-[var(--service-icon-gap)]")}>
        Aşağıdaki formu doldurarak sorularınızı, önerilerinizi veya rezervasyon taleplerinizi bize iletebilirsiniz. Gezilab ekibi en kısa sürede geri dönüş yapacaktır.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1 indent-[var(--service-icon-gap)]">Adınız ve Soyadınız</label>
          <Input placeholder="Lütfen adınızı ve soyadınızı giriniz." className="pl-[var(--service-icon-gap)]" />
        </div>
        <div>
          <label className="block font-medium mb-1 indent-[var(--service-icon-gap)]">E-posta Adresiniz</label>
          <Input type="email" placeholder="ornek@gezilab.com" className="pl-[var(--service-icon-gap)]" />
        </div>
        <div>
          <label className="block font-medium mb-1 indent-[var(--service-icon-gap)]">Rezervasyon Kodu (opsiyonel)</label>
          <Input placeholder="Varsa rezervasyon kodunuzu giriniz." className="pl-[var(--service-icon-gap)]" />
        </div>
        <div>
          <label className="block font-medium mb-1 indent-[var(--service-icon-gap)]">Telefon Numaranız</label>
          <Input placeholder="+90 5XX XXX XX XX formatında giriniz." className="pl-[var(--service-icon-gap)]" />
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1 indent-[var(--service-icon-gap)]">Mesajınız</label>
        <Textarea
          rows={5}
          placeholder="Nasıl yardımcı olabiliriz? Lütfen mesajınızı detaylıca yazınız."
          className="pl-[var(--service-icon-gap)]"
        />
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
        <Input placeholder="Güvenlik kodunu giriniz." className="pl-[var(--service-icon-gap)]" />
        <div className="bg-muted text-lg font-semibold px-4 py-2 rounded shadow text-center indent-[var(--service-icon-gap)]">
          KCERRT
        </div>
      </div>

      <div className="pt-6">
        <Button type="submit" className="px-[var(--service-icon-gap)]">Gönder</Button>
      </div>
    </form>   
  )
}