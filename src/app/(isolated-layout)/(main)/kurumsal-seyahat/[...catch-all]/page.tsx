import KurumsalSeyahatPageClient from "./client";


export const revalidate = 60; // 60 saniyede bir revalidate edilir (ISR)
// export const dynamic = "force-static"; // Tam SSG için


// app/kurumsal-seyahat/[...catch-all]/page.tsx
// export async function generateStaticParams() {
//   return Object.keys(serviceDetails).map((slug) => ({
//     "catch-all": [slug],
//   }));
// }


export default async function KurumsalSeyahatPage({ params }: { params: Promise<{ "catch-all": string[] }> }) {
  const { "catch-all": catchAll } = await params;
  const slug = catchAll?.[0];
  return <KurumsalSeyahatPageClient slug={slug} />;
}
