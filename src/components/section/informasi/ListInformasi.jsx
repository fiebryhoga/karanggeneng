import React, { useState, useEffect } from "react";
import CardBerita from "@/components/common/CardBerita";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FilterInformasi from "@/components/common/FilterInformasi";
import dataBerita from "@/data/dataBerita";

import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ListInformasi = () => {
  const [selectedFilter, setSelectedFilter] = useState("Semua");
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  // scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

      {/* Tombol Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 rounded-full p-3 bg-blue-800/70 hover:bg-blue-800/90 text-white shadow-lg transition-all duration-300 z-50"
        >
          <MdOutlineKeyboardDoubleArrowUp size={30} />
        </button>
      )}
    </SectionWrapper>
  );
};

export default ListInformasi;
