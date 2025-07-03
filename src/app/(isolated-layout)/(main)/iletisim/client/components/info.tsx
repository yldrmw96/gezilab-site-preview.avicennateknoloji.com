import { socials } from "@/lib/mock/socials";
import styles from "@/styles/contact.module.css";
import { cn } from "@/lib/utils";
const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.2640710988962!2d32.76556161207257!3d39.91310627140632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34881ee764a8b%3A0x2dcbeb0e334685e!2sMustafa%20Kemal%2C%202131.%20Sk.%20No%3A6%2F8%2C%2006510%20%C3%87ankaya%2FAnkara!5e0!3m2!1sen!2str!4v1751272011185!5m2!1sen!2str";
export default function Info() {
  return (
    <div className={styles.column}>
      <h1 className={cn(styles.title, "indent-[var(--service-icon-gap)]")}>Bizimle İletişime Geçin</h1>
      <p className={cn(styles.subtitle, "px-[var(--service-icon-gap)]")}>
        Sorularınız, önerileriniz veya rezervasyon talepleriniz için bize aşağıdaki form üzerinden ulaşabilirsiniz. En kısa sürede geri dönüş sağlayacağız.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.url}
            className="flex items-center gap-[var(--service-icon-gap)] transition group"
          >
            <item.icon width={"1em"} height={"1em"} className="border p-1 rounded-[4px] shadow-xs shrink-0 text-[length:var(--service-icon-size)] text-primary" />
            <span className="font-medium text-sm text-gray-700 group-hover:text-primary transition-colors group-hover:underline">{item.label}</span>
          </a>
        ))}
      </div>

      <iframe
        src={mapUrl}
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="max-h-[20rem] overflow-hidden w-full bg-gray-100 rounded-lg flex items-center justify-center"
        width="600" height="450" 
      />

    </div>
  )
}