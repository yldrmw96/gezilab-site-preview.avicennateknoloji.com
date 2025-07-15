"use client"
import { Button } from "../../../../../../components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function GoBackButton() {
  const router = useRouter();
  return (
    <Button variant="ghost" onClick={() => router.back()} className="flex flex-row items-center gap-2" >

      <ArrowLeftIcon className="w-4 h-4" />
      <span className="text-sm">Önceki Sayfaya Dön</span>
    </Button>
  )
}

export { GoBackButton }