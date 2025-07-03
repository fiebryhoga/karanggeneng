"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {

    const router = useRouter();
    const currentPath = router.pathname;

    

    const navItemClass = (path) =>
      `border-b-2 ${
        currentPath === path
          ? "border-b-blue-800"
          : "border-transparent hover:border-b-blue-800"
      } transition-all duration-300 ease-in-out h-10 px-4 flex flex-row justify-center items-center`;

    const linkClass = `cursor-pointer text-black font-medium hover:text-blue-800`;

    const navItemClassMulti = (paths = []) =>
      `border-b-2 ${
        paths.includes(currentPath)
          ? "border-b-blue-800"
          : "border-transparent hover:border-b-blue-800"
      } transition-all duration-300 ease-in-out h-10 px-4 flex flex-row justify-center items-center`;
    
    
  return (
    <nav className="flex flex-row justify-between items-center px-28 py-3 border-b border-b-blue-800/20 shadow shadow-blue-800/20">
      {/* Bagian Logo */}
      <ul>
        <Link
          href="/"
          className="flex flex-row gap-4 justify-start items-center"
        >
          <img
            src="/assets/image/layout/logo-desa-karanggeneng.png"
            alt="Logo Desa Karanggeneng"
            className="w-12"
          />
          <div className="flex flex-col">
            <h1 className="text-blue-800 font-extrabold text-xl">
              Desa Karanggeneng
            </h1>
            <p className="text-yellow-700 font-medium text-sm">
              Kec. Karanggeneng Kab. Lamongan
            </p>
          </div>
        </Link>
      </ul>

      {/* Bagian Menu */}
      <ul className="flex flex-row justify-center items-center font-medium text-black/80 text-base">
        <Link
          href="/"
          className="h-8 mt-1 px-5 hover:text-blue-800/80 hover:border-b-2 hover:border-blue-800"
        >
          Beranda
        </Link>

        <div className="relative group">
          <ul className={navItemClassMulti(["/about", "/portofolio"])}>
            <div
              className={`${linkClass} pl-2 flex flex-row gap-1 items-center`}
            >
              Profil Desa <MdKeyboardArrowDown size={20} />
            </div>
          </ul>
          <div className="absolute top-full text-base w-56 left-0 bg-white rounded-b-md shadow-md hidden group-hover:block z-50 pt-2">
            <Link
              href="/pemerintahan"
              className="block px-6 py-2 text-black hover:bg-blue-800/20 hover:text-yellow-700"
            >
              Pemerintahan
            </Link>
            <Link
              href="/visiMisi"
              className="block px-6 py-2 text-black hover:bg-blue-800/20 hover:text-yellow-700"
            >
              Visi - Misi
            </Link>
            <Link
              href="/lembagaDesa"
              className="block px-6 py-2 text-black hover:bg-blue-800/20 hover:text-yellow-700"
            >
              Lembaga Desa
            </Link>
            <Link
              href="/demografiDesa"
              className="block px-6 py-2 text-black hover:bg-blue-800/20 hover:text-yellow-700"
            >
              Denografi Desa
            </Link>
            <Link
              href="/fasilitasDesa"
              className="block px-6 py-2 text-black hover:bg-blue-800/20 hover:text-yellow-700"
            >
              Fasilitas Desa
            </Link>
            <Link
              href="/petaDesa"
              className="block px-6 py-2 text-black hover:bg-blue-800/20 hover:text-yellow-700 rounded-b-md"
            >
              Peta Desa
            </Link>
          </div>
        </div>

        <Link
          href="/#"
          className="h-8 mt-1 px-5 hover:text-blue-800/80 hover:border-b-2 hover:border-blue-800"
        >
          Lembaga
        </Link>
        <Link
          href="/#"
          className="h-8 mt-1 px-5 hover:text-blue-800/80 hover:border-b-2 hover:border-blue-800"
        >
          Produk Hukum
        </Link>
        <div className="relative group">
          <ul className={navItemClassMulti(["/about", "/portofolio"])}>
            <div
              className={`${linkClass} pl-2 flex flex-row gap-1 items-center`}
            >
              Layanan <MdKeyboardArrowDown size={20} />
            </div>
          </ul>
          <div className="absolute top-full text-base w-56 left-0 bg-white rounded-b-md shadow-md hidden group-hover:block z-50 pt-2">
            <Link
              href="/pemerintahan"
              className="block px-6 py-2 text-black hover:bg-blue-800/20 hover:text-yellow-700"
            >
              Pengajuan
            </Link>

            <Link
              href="/demografiDesa"
              className="block px-6 py-2 text-black hover:bg-blue-800/20 hover:text-yellow-700 rounded-b-md"
            >
              Pengaduan
            </Link>
          </div>
        </div>
        <Link
          href="/#"
          className="h-8 mt-1 px-5 hover:text-blue-800/80 hover:border-b-2 hover:border-blue-800"
        >
          Berita
        </Link>
        <div className="relative group">
          <ul className={navItemClassMulti(["/about", "/portofolio"])}>
            <div
              className={`${linkClass} pl-2 flex flex-row gap-1 items-center`}
            >
              Galeri <MdKeyboardArrowDown size={20} />
            </div>
          </ul>
          <div className="absolute top-full text-base w-44 left-0 bg-white rounded-b-md shadow-md hidden group-hover:block z-50 pt-2">
            <Link
              href="/pemerintahan"
              className="block px-6 py-2 text-black hover:bg-blue-800/20 hover:text-yellow-700"
            >
              Foto
            </Link>

            <Link
              href="/demografiDesa"
              className="block px-6 py-2 text-black hover:bg-blue-800/20 hover:text-yellow-700 rounded-b-md"
            >
              Video
            </Link>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
