import styles from "@/styles/safearea.module.css";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default async function TurizmHaberleriPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div className={styles.safe_area}>
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4">
        <div className="border-b border-t flex flex-row items-center justify-between py-1.5">
          <Button variant="outline" size="icon">
            <Link href="/kesfet/turizm-haberleri">
              <ArrowLeftIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-bold">Turizm Haberleri Page {id}</h1>
          <p className="text-sm text-muted-foreground">
            Turizm Haberleri Page {id}
          </p>
        </div>
      </div>
    </div>
  )
}