

import Hero from "./client/components/hero";

import Spacer from "@/components/spacer";
import Subscribe from "./client/components/subscribe";
import AnnouncementsAndCampaigns from "./client/components/announcements-and-campaigns";
import layoutStyles from "@/styles/layout.module.css";
import { cn } from "@/lib/utils";
import { getStrCatalogOnce } from "@/lib/getStrCatalogOnce";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { sanitizeHTML } from "@/lib/utils/blog-helper-functions.server";

export default async function Home() {
  const stringCatalog = await getStrCatalogOnce();
  const cookieStore = await cookies();
  // table structure: 'post' table has group_uuid relation content_group table. and name of the news is 'tourism_news'. i dont know 'tourism_news' uuid but i know its name so i can use it.
  const supabase = await createClient(cookieStore);

  // First, get the UUID of the tourism_news content group
  const { data: contentGroup, error: contentGroupError } = await supabase
    .from('content_group')
    .select('uuid')
    .eq('name', 'tourism_news')
    .single();

  if (contentGroupError) {
    console.error('Error fetching content group:', contentGroupError);
    return;
  }

  // Then use that UUID to fetch posts
  const { data: tourism_news, error: postsError } = await supabase
    .from('post')
    .select('*')
    .eq('group_uuid', contentGroup.uuid);

  if (postsError) {
    console.error('Error fetching posts:', postsError);
    return;
  }

  const { data: announcements, error: announcementsError } = await supabase
    .from('post')
    .select('*')
    .eq('group_uuid', "70d57f0c-7946-4bc1-bf94-27a8aee9ce7d");

  // console.log(announcements);
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
      <AnnouncementsAndCampaigns 
      initialData={{
        tourism_news: tourism_news,
        announcements: announcements,
      }}
      stringCatalog={stringCatalog} />
    </div>
  );
}
