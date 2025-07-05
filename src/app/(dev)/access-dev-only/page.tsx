import React from "react";
import { Maintenance } from "@/components/maintenance";

export default function AccessDevOnly() {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center max-w-screen-sm mx-auto">

      <Maintenance title="Geçici Olarak Hizmet Dışı" description="Size daha iyi bir deneyim sunabilmek için sistemimizi güncelliyoruz" variant="flat"/> 
   </div>
  )
}