import React from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ContainerAparatur from "@/components/common/ContainerAparatur";
import ContainerAparaturGrup from "@/components/common/ContainerAparaturGrup";

import dataAparatur from "@/data/dataAparatur";

const PemerintahanSection = () => {
  return (
    <SectionWrapper>
      <div className="w-full flex flex-col gap-8 md:px-12">
        {/* Kades */}
        <ContainerAparatur
          name={dataAparatur.kades.name}
          jabatan={dataAparatur.kades.jabatan}
          photoSrc={dataAparatur.kades.photoSrc}
        />

        {/* Sekdes */}
        <ContainerAparatur
          name={dataAparatur.sekdes.name}
          jabatan={dataAparatur.sekdes.jabatan}
          photoSrc={dataAparatur.sekdes.photoSrc}
        />

        {/* Kaur (Kepala Urusan) */}
        <ContainerAparaturGrup
          title={dataAparatur.kaur.title}
          subtitle={dataAparatur.kaur.subtitle}
          data={dataAparatur.kaur.data}
        />

        {/* Kasi (Kepala Seksi) */}
        <ContainerAparaturGrup
          title={dataAparatur.kasi.title}
          subtitle={dataAparatur.kasi.subtitle}
          data={dataAparatur.kasi.data}
        />
      </div>
    </SectionWrapper>
  );
};

export default PemerintahanSection;
