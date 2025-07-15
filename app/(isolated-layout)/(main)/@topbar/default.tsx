import { MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { socials } from "@lib/mock/socials";
export default function Topbar() {
  return (
    <div className="animate-in slide-in-from-top w-full hidden lg:flex bg-primary [&_*]:!text-primary-foreground animate-fadeIn h-[var(--top-bar-height)]">
      <div className="container flex items-center justify-between max-w-screen-xl mx-auto text-muted-foreground text-sm w-full">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="text-primary" size={16} />
            <span className="font-medium">
              {socials[2].label}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="text-primary" size={16} />
            <span className="font-medium">{socials[1].label}</span>
          </div>
          <div className="flex items-center gap-2">
            {[
              { icon: Facebook, name: "Facebook" },
              { icon: Twitter, name: "Twitter" },
              { icon: Linkedin, name: "LinkedIn" },
              { icon: Instagram, name: "Instagram" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 flex items-center justify-center  text-primary hover:bg-primary hover:text-white transition"
                aria-label={item.name}
              >
                <item.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
