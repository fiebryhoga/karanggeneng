import React from "react";
import { FiUser, FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const CardBerita = ({
  href = "/berita",
  imageSrc = "/assets/image/home/contoh-berita1.jpeg",
  title = "Judul Berita",
  author = "Admin Desa",
  date = "1 Januari 2025",
  time = "10:00",
  description = "Deskripsi singkat berita.",
  jenisInformasi = "Berita",
  tags = [],
}) => {
  return (
    <Link
      href={href}
      className="w-full border border-blue-800/20 rounded-xl overflow-hidden shadow-sm shadow-blue-800/20 transition-shadow duration-300 bg-white flex flex-col"
    >
      {/* Thumbnail */}
      <div className="w-full h-44 md:h-72 overflow-hidden relative bg-gradient-to-t from-black via-black to-blue-800">
        <div className="absolute bottom-0 w-full py-2 flex flex-row flex-wrap px-4 gap-2 z-10">
          {/* jenis informasi */}
          <span className="bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full">
            {jenisInformasi}
          </span>

          {/* tags */}
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-all duration-300 opacity-80"
          onError={(e) => {
            e.target.onerror = null;
          }}
        />
      </div>

      {/* Content */}
      <div className="px-4 py-3 flex flex-col gap-2 flex-grow">
        <h4 className="font-semibold text-black text-xs md:text-lg md:leading-6 line-clamp-4 md:line-clamp-2">
          {title}
        </h4>

        <div className="hidden md:flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-black/60 mb-2">
          <div className="flex items-center gap-1">
            <FiUser size={12} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiCalendar size={12} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiClock size={12} />
            <span>{time}</span>
          </div>
        </div>

        <div className="hidden md:block">
          <p className="text-xs md:text-sm text-black/80 font-sans md:line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-2">
          <div className="inline-flex items-center gap-1 text-xs font-semibold text-blue-800/60 hover:text-blue-800 cursor-pointer transition-colors">
            Lihat Selengkapnya <FiArrowRight size={15} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardBerita;
