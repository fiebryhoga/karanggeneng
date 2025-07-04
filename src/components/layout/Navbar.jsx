"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

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
    <nav className="flex flex-row fixed w-full justify-between items-center px-8 md:px-16 xl:px-28 py-3 border-b border-b-blue-800/20 shadow shadow-blue-800/20 z-20 bg-white">
      {/* Logo */}
      <Link href="/" className="flex flex-row gap-4 justify-start items-center">
        <img
          src="/assets/image/layout/logo-desa-karanggeneng.png"
          alt="Logo Desa Karanggeneng"
          className="w-12"
        />
        <div className="flex flex-col">
          <h1 className="text-blue-800 font-extrabold text-lg xl:text-xl">
            Desa Karanggeneng
          </h1>
          <p className="text-yellow-700 font-medium text-sm lg:hidden xl:block">
            Kec. Karanggeneng Kab. Lamongan
          </p>
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-row justify-center items-center font-medium text-black/80 lg:text-sm xl:text-base">
        <Link
          href="/"
          className="h-10 flex flex-row justify-center items-center lg:px-3 xl:px-5 hover:text-blue-800/80 border-b-2 border-transparent hover:border-b-2 hover:border-blue-800"
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
          <div className="absolute top-full lg:text-sm xl:text-base w-56 left-0 bg-white rounded-b-md shadow-md hidden group-hover:block z-50 pt-2">
            <Link
              href="/pemerintahan"
              className="block px-6 py-2 text-black hover:bg-blue-800/20 hover:text-yellow-700"
            >
              Aparatur Pemerintahan
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
          className="h-10 flex flex-row justify-center items-center lg:px-3 xl:px-5 hover:text-blue-800/80 border-b-2 border-transparent hover:border-b-2 hover:border-blue-800"
        >
          Lembaga
        </Link>
        <Link
          href="/#"
          className="h-10 flex flex-row justify-center items-center lg:px-3 xl:px-5 hover:text-blue-800/80 border-b-2 border-transparent hover:border-b-2 hover:border-blue-800"
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
          <div className="absolute top-full lg:text-sm xl:text-base w-56 left-0 bg-white rounded-b-md shadow-md hidden group-hover:block z-50 pt-2">
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
          className="h-10 flex flex-row justify-center items-center lg:px-3 xl:px-5 hover:text-blue-800/80 border-b-2 border-transparent hover:border-b-2 hover:border-blue-800"
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
          <div className="absolute top-full lg:text-sm xl:text-base lg:w-20 xl:w-44 left-0 bg-white rounded-b-md shadow-md hidden group-hover:block z-50 pt-2">
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

      {/* Hamburger (Mobile) */}
      <button
        className="lg:hidden text-blue-800 text-3xl"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileOpen ? "fixed" : "hidden"
        } top-0 left-0 w-full h-full bg-white z-40 overflow-y-auto`}
      >
        {/* Mobile header inside mobile menu */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src="/assets/image/layout/logo-desa-karanggeneng.png"
              alt="Logo Desa Karanggeneng"
              className="w-10"
            />
            <div className="flex flex-col">
              <h1 className="text-blue-800 font-extrabold text-lg">
                Desa Karanggeneng
              </h1>
              <p className="text-yellow-700 font-medium text-xs">
                Kec. Karanggeneng Kab. Lamongan
              </p>
            </div>
          </Link>
          <button
            className="text-3xl text-blue-800"
            onClick={() => setMobileOpen(false)}
          >
            <MdClose />
          </button>
        </div>

        <div className="flex flex-col p-8 gap-4">
          <Link
            href="/"
            className="text-black font-semibold text-lg"
            onClick={() => setMobileOpen(false)}
          >
            Beranda
          </Link>

          {/* Dropdown Profil Desa */}
          <div>
            <button
              className="flex justify-between items-center w-full text-black font-semibold text-lg"
              onClick={() => toggleDropdown("profilDesa")}
            >
              Profil Desa <MdKeyboardArrowDown />
            </button>
            {openDropdown === "profilDesa" && (
              <div className="pl-4 flex flex-col gap-2 mt-2">
                <Link
                  href="/pemerintahan"
                  onClick={() => setMobileOpen(false)}
                  className="text-black"
                >
                  Aparatur Pemerintahan
                </Link>
                <Link
                  href="/visiMisi"
                  onClick={() => setMobileOpen(false)}
                  className="text-black"
                >
                  Visi - Misi
                </Link>
                <Link
                  href="/lembagaDesa"
                  onClick={() => setMobileOpen(false)}
                  className="text-black"
                >
                  Lembaga Desa
                </Link>
                <Link
                  href="/demografiDesa"
                  onClick={() => setMobileOpen(false)}
                  className="text-black"
                >
                  Denografi Desa
                </Link>
                <Link
                  href="/fasilitasDesa"
                  onClick={() => setMobileOpen(false)}
                  className="text-black"
                >
                  Fasilitas Desa
                </Link>
                <Link
                  href="/petaDesa"
                  onClick={() => setMobileOpen(false)}
                  className="text-black"
                >
                  Peta Desa
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/#"
            className="text-black font-semibold text-lg"
            onClick={() => setMobileOpen(false)}
          >
            Lembaga
          </Link>
          <Link
            href="/#"
            className="text-black font-semibold text-lg"
            onClick={() => setMobileOpen(false)}
          >
            Produk Hukum
          </Link>

          {/* Dropdown Layanan */}
          <div>
            <button
              className="flex justify-between items-center w-full text-black font-semibold text-lg"
              onClick={() => toggleDropdown("layanan")}
            >
              Layanan <MdKeyboardArrowDown />
            </button>
            {openDropdown === "layanan" && (
              <div className="pl-4 flex flex-col gap-2 mt-2">
                <Link
                  href="/pemerintahan"
                  onClick={() => setMobileOpen(false)}
                  className="text-black"
                >
                  Pengajuan
                </Link>
                <Link
                  href="/demografiDesa"
                  onClick={() => setMobileOpen(false)}
                  className="text-black"
                >
                  Pengaduan
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/#"
            className="text-black font-semibold text-lg"
            onClick={() => setMobileOpen(false)}
          >
            Berita
          </Link>

          {/* Dropdown Galeri */}
          <div>
            <button
              className="flex justify-between items-center w-full text-black font-semibold text-lg"
              onClick={() => toggleDropdown("galeri")}
            >
              Galeri <MdKeyboardArrowDown />
            </button>
            {openDropdown === "galeri" && (
              <div className="pl-4 flex flex-col gap-2 mt-2">
                <Link
                  href="/pemerintahan"
                  onClick={() => setMobileOpen(false)}
                  className="text-black"
                >
                  Foto
                </Link>
                <Link
                  href="/demografiDesa"
                  onClick={() => setMobileOpen(false)}
                  className="text-black"
                >
                  Video
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
