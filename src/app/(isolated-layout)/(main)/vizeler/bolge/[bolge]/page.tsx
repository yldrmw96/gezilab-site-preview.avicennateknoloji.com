import BolgeDetail from "@/partials/bolge";
export default async function BolgePage({ params }: { params: { bolge: string } }) {
  const { bolge } = await params;
  return (
    <BolgeDetail bolge={bolge} />
  );
}