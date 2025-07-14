"use client"
import { localizedString } from "@/lib/localizableString";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLanguage } from "@/store/hooks/language.hook";
import { useStringCatalog } from "@/store/hooks/string-catalog.hook";
import { localizedStringAlternate } from "@/lib/localizedStringAlternate";

const Copyright = ({ brand, className, stringCatalogFromServer, ...props }: { brand: string, className?: string, props?: React.ComponentPropsWithoutRef<"div">, stringCatalogFromServer: any }) => {
  const year = new Date().getFullYear();
  return (
    <div className={cn("flex flex-row w-full justify-between gap-4 max-sm:flex-col max-sm:items-center max-sm:justify-center", className)} {...props}>
      <PoliciesSection className="flex md:hidden" stringCatalogFromServer={stringCatalogFromServer} />
      <p className="text-xs font-medium max-sm:text-center text-gray-600 dark:text-neutral-400">
        © {year} {localizedStringAlternate(stringCatalogFromServer, "powered_by", "_root")}{" "}
        <Link
          href="https://www.google.com"
          className="text-primary font-bold hover:text-primary/80 "
        >
          {brand}
        </Link>
        . {localizedStringAlternate(stringCatalogFromServer, "all_rights_reserved", "_root")}
      </p>
      <PoliciesSection className="hidden md:flex" stringCatalogFromServer={stringCatalogFromServer} />
    </div>
  );
};

  const PoliciesSection = ({className, stringCatalogFromServer}: {className?: string, stringCatalogFromServer: any}) => {
  const serviceAgreement = stringCatalogFromServer.length > 0 ? localizedStringAlternate(stringCatalogFromServer, "service_agreement") : "Hizmet Sözleşmesi";
  const privacyPolicy = stringCatalogFromServer.length > 0 ? localizedStringAlternate(stringCatalogFromServer, "privacy_policy") : "Gizlilik Sözleşmesi";
  const { values: { language } } = useLanguage();
  // console.log(language);
  // console.log(serviceAgreement);
  // console.log(privacyPolicy);
return(
  <div className={cn("flex flex-row max-sm:flex-col max-sm:items-center max-sm:justify-center gap-4 items-center", className)}>
    <p className="text-xs font-medium text-gray-600 dark:text-neutral-400 text-balance">
      <Link
        href="/c/hizmet"
        className="text-primary font-bold hover:text-primary/80 "
      >
        {
          serviceAgreement
        }
      </Link>
      .
    </p>
    <p className="text-xs font-medium text-gray-600 dark:text-neutral-400">
      <Link
        href="/c/gizlilik"
        className="text-primary font-bold hover:text-primary/80 "
      >
          {
        privacyPolicy
        }
      </Link>
      .
    </p>
  </div>
)}
  

export default Copyright;