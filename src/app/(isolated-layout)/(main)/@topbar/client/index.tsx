import { socials } from "@/lib/mock/socials";
import Link from "next/link";

export default function Client() {
  return (
    <div className="w-full bg-primary py-2 flex items-center justify-center">
      <div className="flex flex-row items-center my-auto justify-center gap-2 max-w-screen-xl mx-auto">
        {socials.map((social) => (
          <div key={social.name} className="flex flex-row  items-center gap-2">
            <social.icon width="1em" height="1em" className="text-white" />
            <Link href={social.url} className="text-sm !font-semibold hover:underline text-white">
              {social.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}