import React from "react";
import { TiFilter } from "react-icons/ti";

const FilterInformasi = ({ activeFilter, onChange }) => {
  const filters = ["Semua", "Berita", "Pengumuman", "Agenda"];

  return (
    <div className="h-14 w-full md:w-xl flex flex-row justify-start items-center border border-blue-800/20 rounded-lg shadow-md shadow-blue-800/10 mb-8">
      {/* Icon Filter */}
      <div className="h-full px-3 flex flex-row justify-center items-center border-r rounded-l-lg border-blue-800/10 bg-blue-800/80">
        <TiFilter size={30} color="white" />
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-row flex-nowrap md:grid md:grid-cols-4 h-full">
        {filters.map((filter, index) => {
          // Tentukan border untuk mobile
          let borderClass = "";
          if (index !== filters.length - 1) {
            borderClass = "border-r";
          }

          return (
            <button
              key={index}
              onClick={() => onChange(filter)}
              className={`
                flex-1 h-full
                ${borderClass} border-blue-800/20
                px-1 md:px-4 cursor-pointer flex flex-row justify-center items-center text-xs md:text-sm font-medium
                ${
                  activeFilter === filter
                    ? "bg-blue-800/80 text-white"
                    : "text-blue-800/80 hover:bg-blue-800/80 hover:text-white"
                }
                transition-all ease-in-out duration-300
                ${index === filters.length - 1 ? "md:rounded-r-lg md:border-r-0" : ""}
              `}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterInformasi;
