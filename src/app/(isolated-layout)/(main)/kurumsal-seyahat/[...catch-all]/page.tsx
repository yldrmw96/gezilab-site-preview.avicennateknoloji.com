import KurumsalSeyahatPageClient from "./client";

export default async function KurumsalSeyahatPage({ params }: { params: { "catch-all": string[] } }) {
  const { "catch-all": catchAll } = await params;
  const slug = catchAll?.[0];
  return <KurumsalSeyahatPageClient slug={slug} />;
}