import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/section/Beranda/Hero";

import SambutanKades from "@/components/section/Beranda/SambutanKades";
import DemografiSingkat from "@/components/section/Beranda/DemografiSingkat";
import Berita from "@/components/section/Beranda/Berita";

export default function Home() {
  return (
    <MainLayout>
      <Hero/>
      <SambutanKades/>
      <DemografiSingkat/>
      <Berita/>
    </MainLayout>
  );
}
