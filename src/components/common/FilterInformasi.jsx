import React from "react";
import { TiFilter } from "react-icons/ti";

const FilterInformasi = ({ activeFilter, onChange }) => {
  const filters = ["Semua", "Berita", "Pengumuman", "Agenda"];

  return (
    <div className="h-14 w-xl flex flex-row justify-start items-center border border-blue-800/20 rounded-lg shadow-md shadow-blue-800/10 mb-8">
      <div className="h-full px-3 flex flex-row justify-center items-center border-r rounded-l-lg border-blue-800/10 bg-blue-800/80">
        <TiFilter size={30} color="white"/>
      </div>

      <div className="grid grid-cols-4 h-full flex-grow">
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => onChange(filter)}
            className={`
              px-4 cursor-pointer flex flex-row justify-center items-center text-sm font-medium border-r
              border-blue-800/20
              ${
                activeFilter === filter
                  ? "bg-blue-800/80 text-white"
                  : "text-blue-800/80 hover:bg-blue-800/80 hover:text-white"
              }
              transition-all ease-in-out duration-300
              ${index === filters.length - 1 ? "rounded-r-lg border-r-0" : ""}
            `}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterInformasi;