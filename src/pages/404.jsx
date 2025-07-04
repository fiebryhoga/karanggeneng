// pages/404.jsx
import React from "react";
import Link from "next/link";
import { FaUtensils } from "react-icons/fa";
import SectionWrapper from "@/components/layout/SectionWrapper";

const NotFound = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-black via-blue-800 to-blue-700 px-4">
        <div className="flex flex-col items-center text-center gap-6">
          <FaUtensils className="text-white text-6xl animate-bounce" />
          <h1 className="text-white text-5xl font-extrabold">404</h1>
          <hr className="w-full text-white"/>
          <p className="text-white text-lg max-w-md animate-pulse">
            Ups, halaman belum tersedia. Bentar boss ngopi dulu. Tunggu ya!
          </p>
          <Link
            href="/"
            className="mt-4 px-6 py-3 rounded-full bg-white text-blue-800 font-semibold border border-white hover:text-white hover:bg-transparent hover:text-black transition-all duration-300"
          >
            Balik ke Beranda dulu deh
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
