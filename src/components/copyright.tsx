"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLocalizedStringAlternate } from "@/lib/localizedStringAlternate";

const Copyright = ({ brand, className, stringCatalogFromServer, ...props }: { brand: string, className?: string, props?: React.ComponentPropsWithoutRef<"div">, stringCatalogFromServer: any }) => {
  const year = new Date().getFullYear();
  return (
    <div className={cn("flex flex-row w-full justify-between gap-4 max-sm:flex-col max-sm:items-center max-sm:justify-center", className)} {...props}>
      <PoliciesSection className="flex md:hidden" stringCatalogFromServer={stringCatalogFromServer} />
      <p className="text-xs font-medium max-sm:text-center text-gray-600 dark:text-neutral-400">
        © {year} {useLocalizedStringAlternate(stringCatalogFromServer, "powered_by", "_root")}{" "}
        <Link
          href="https://www.google.com"
          className="text-primary font-bold hover:text-primary/80 "
        >
          {brand}
        </Link>
        . {useLocalizedStringAlternate(stringCatalogFromServer, "all_rights_reserved", "_root")}
      </p>
      <PoliciesSection className="hidden md:flex" stringCatalogFromServer={stringCatalogFromServer} />
    </div>
  );
};

const PoliciesSection = ({ className, stringCatalogFromServer }: { className?: string, stringCatalogFromServer: any }) => {
  const serviceAgreement = useLocalizedStringAlternate(stringCatalogFromServer, "service_agreement");
  const privacyPolicy = useLocalizedStringAlternate(stringCatalogFromServer, "privacy_policy");

  const finalServiceAgreement = serviceAgreement || "Hizmet Sözleşmesi";
  const finalPrivacyPolicy = privacyPolicy || "Gizlilik Sözleşmesi";

  return (
    <div className={cn("flex flex-row max-sm:flex-col max-sm:items-center max-sm:justify-center gap-4 items-center", className)}>
      <p className="text-xs font-medium text-gray-600 dark:text-neutral-400 text-balance">
        <Link
          href="/c/hizmet"
          className="text-primary font-bold hover:text-primary/80 "
        >
          {finalServiceAgreement}
        </Link>
        .
      </p>
      <p className="text-xs font-medium text-gray-600 dark:text-neutral-400">
        <Link
          href="/c/gizlilik"
          className="text-primary font-bold hover:text-primary/80 "
        >
          {finalPrivacyPolicy}
        </Link>
        .
      </p>
    </div>
  )
}


export default Copyright;