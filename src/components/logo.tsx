import { links } from "@/lib/links"
import Link from "next/link"
import Image from "next/image"
import React, { memo } from "react"


export  default memo( function Logo() {
  return (
    <Link href={links.home()} className="relative">
      <Image src="/logo.png" alt="logo"
        fill
        className="object-contain max-w-[7rem] rounded-xl bg-background overflow-hidden !h-auto my-auto"
      />
    </Link>
  )
})