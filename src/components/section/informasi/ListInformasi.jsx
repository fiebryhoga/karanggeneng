import React, { useState } from "react";
import CardBerita from "@/components/common/CardBerita";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FilterInformasi from "@/components/common/FilterInformasi";
import dataBerita from "@/data/dataBerita";

const ListInformasi = () => {
  const [selectedFilter, setSelectedFilter] = useState("Semua");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredData =
    selectedFilter === "Semua"
      ? [...dataBerita]
      : dataBerita.filter(
          (item) =>
            item.jenisInformasi?.toLowerCase() === selectedFilter.toLowerCase()
        );

  // urutkan data dari yang terbaru
  filteredData.sort((a, b) => {
    const parseDate = (dateStr) => {
      if (!dateStr) return new Date(0);
      const parts = dateStr.split(" ");
      const day = parts[0];
      const monthName = parts[1];
      const year = parts[2];
      const monthMap = {
        Januari: "01",
        Februari: "02",
        Maret: "03",
        April: "04",
        Mei: "05",
        Juni: "06",
        Juli: "07",
        Agustus: "08",
        September: "09",
        Oktober: "10",
        November: "11",
        Desember: "12",
      };
      const month = monthMap[monthName] || "01";
      return new Date(`${year}-${month}-${day}`);
    };

    return parseDate(b.date) - parseDate(a.date);
  });

  return (
    <SectionWrapper>
      <FilterInformasi
        activeFilter={selectedFilter}
        onChange={handleFilterChange}
      />

      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <CardBerita
              key={index}
              href={item.href}
              imageSrc={item.imageSrc}
              title={item.title}
              author={item.author}
              date={item.date}
              time={item.time}
              description={item.description}
              jenisInformasi={item.jenisInformasi}
              tags={item.tags}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-8">
            Tidak ada data untuk kategori ini.
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ListInformasi;
