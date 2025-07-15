import React from "react";
import TurlarClient from "./client";

export default async function TurlarPageServer({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  const catchCategory = (params: unknown) => {
    const slugArray = Array.isArray(params) ? params : [params];
    const kategori = slugArray[1] || null;
    return kategori;
  }

  const kategori = catchCategory(slug) || null;
  return <TurlarClient kategori={kategori} />
}