import styles from "@/styles/safearea.module.css";
import {  CalendarIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import { GoBackButton } from "./client-side";
import { formatDate } from "@/lib/utils/blog-helper-functions.server";

export default async function TurizmHaberleriPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);
  const match = id.match(/^(.*)-([0-9a-fA-F]{12})$/);
  if (!match) {
    return { notFound: true };
  }
  const [ , humanSlug, storyIdHex ] = match;

  // First, get the UUID of the tourism_news content group
  const { data: contentGroup, error: contentGroupError } = await supabase
    .from('content_group')
    .select('uuid')
    .eq('name', 'tourism_news')
    .single();
  if (contentGroupError) {
    // console.error('Error fetching content group:', contentGroupError);
    return;
  }
  const { data: post, error } = await supabase
    .from("post")
    .select("*")
    .eq("slug", humanSlug)
    .eq("slug_id", storyIdHex)
    .eq("group_uuid", contentGroup.uuid)
    .single();

  const window = new JSDOM("").window;
  const DOMPurifyServer = DOMPurify(window);
  const rawHTML = post.content;
  return (
    <div className={styles.safe_area}>
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4">
        <div className="border-b border-t flex flex-row items-center justify-between py-1.5 gap-2">
          <GoBackButton />
         <div className="flex flex-row items-center gap-2 text-foreground/80 text-sm">
          <CalendarIcon className="w-4 h-4" />
            <span>{formatDate(post.created_at)}</span>
         </div>


        </div>
       
        <div className="flex flex-col justify-between">
          <div className="text-sm leading-relaxed [&_h2]:!font-medium [&_h2]:!font-sans [&_h2]:!mt-5 [&_p]:!leading-6 [&_p]:!text-foreground/90  details__content mx-auto pb-30 px-6 [&_strong]:!text-black !outline-none !ring-0 !ring-offset-0 [&_h1]:!text-2xl [&_h2]:!text-xl [&_h3]:!text-lg [&_h4]:!text-base [&_h5]:!text-sm [&_h6]:!text-xs [&_h1]:!font-bold [&_h3]:!font-bold [&_h4]:!font-bold [&_h5]:!font-bold [&_h6]:!font-bold [ [&_blockquote]:!text-sm [&_blockquote]:italic [&_img]:!w-full [&_img]:!my-6 [&_img]:!object-cover [&_img]:!rounded-3xl [&_img]:!h-[20rem] [&_img]:!object-top [&_p]:!text-sm [&_p]:!leading-6 [&_p]:!text-foreground/90  [&_p]:!font-sans [&_ul]:!my-4

          " dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(rawHTML) }} />
        </div>
      </div>
    </div>
  )
}