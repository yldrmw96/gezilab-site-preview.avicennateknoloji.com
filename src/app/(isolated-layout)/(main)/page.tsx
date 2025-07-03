

import Hero from "./client/components/hero";

import Spacer from "@/components/spacer";
import Subscribe from "./client/components/subscribe";
import AnnouncementsAndCampaigns from "./client/components/announcements-and-campaigns";
import layoutStyles from "@/styles/layout.module.css";
import { cn } from "@/lib/utils";
import { getStrCatalogOnce } from "@/lib/getStrCatalogOnce";

export default async function Home() {
  const stringCatalog = await getStrCatalogOnce();
  return (
    <div className={cn(layoutStyles.main_layout)}> 
      <Hero stringCatalog={stringCatalog} />
      <Spacer />
      {/* <Visas />
      <Spacer /> */}
      {/* <Features2 /> */}
      {/* <Spacer />
      <DestinationCategories />
      <Spacer /> */}
      {/* <AboutUs /> */}
      {/* <Spacer />
      <PopularDestinations />
 
      <Spacer /> */}
      {/* <PopularTours /> */}
      {/* <Spacer /> */}
      <Subscribe stringCatalog={stringCatalog} />
      <Spacer />
      <AnnouncementsAndCampaigns stringCatalog={stringCatalog} />
    </div>
  );
}
