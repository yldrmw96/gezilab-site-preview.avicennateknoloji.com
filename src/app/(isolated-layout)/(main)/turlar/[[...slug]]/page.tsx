import React from "react";
import TurlarClient from "./client";
import { notFound } from "next/navigation";

export default async function TurlarPageServer({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;

  const catchCategory = (params: unknown) => {
    // console.log(params)
    const slugArray = Array.isArray(params) ? params : [params];
    const kategori = slugArray[1] || null;
    return kategori;
  }

  const kategori =  catchCategory(slug) || null;
  // console.log(kategori)
  // if (kategori === null) {
  //   return notFound();
  // }

  return <TurlarClient kategori={kategori} />
}