import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/common/Header";
import PemerintahanSection from "@/components/section/profil-desa/PemerintahanSection";

const Pemerintahan = () => {
  return (
    <MainLayout>
      <Header
        header="Susunan Organisasi dan Tata Kerja"
        deskripsi={
          "Setiap unit memiliki peran penting. Halaman ini membantu Anda memahami alur koordinasi dan tanggung jawab di dalam kepengurusan aparatur desa kami."
        }
      />

      <PemerintahanSection />
    </MainLayout>
  );
};

export default Pemerintahan;
