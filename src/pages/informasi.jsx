import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/common/Header";
import FilterInformasi from "@/components/common/FilterInformasi";
import ListInformasi from "@/components/section/informasi/ListInformasi";

const Informasi = () => {
  return (
    <MainLayout>
      <Header
        header="Berita & Informasi"
        deskripsi={
          "Semua kemudahan layanan untuk warga ada di sini. Cari tahu prosedur pengurusan surat, informasi kependudukan, hingga layanan sosial dengan cepat dan mudah."
        }
      />

      <ListInformasi/>
    </MainLayout>
  );
};

export default Informasi;