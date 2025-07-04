import React from "react";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative w-full bg-white flex flex-col justify-between @max-sm:h-[90vh] md:min-h-screen xl:min-h-0">
      <img
        className="absolute w-full h-full object-cover"
        src="/assets/image/layout/bg-footer.png"
        alt="Latar belakang footer"
      />

      <div className="relative z-10 flex flex-col gap-6 lg:gap-12 px-4 md:px-12 lg:px-20 xl:px-28 py-10 h-full">
        {/* Konten Atas */}
        <div className="hidden md:flex flex-col items-center text-center gap-8 md:mb-14">
          <h1 className="text-white font-semibold text-3xl md:text-4xl mt-10">
            Pemerintahan Desa Karanggeneng
          </h1>
          <p className="text-white text-sm md:text-sm max-w-3xl">
            Website ini kami hadirkan sebagai wujud komitmen untuk meningkatkan
            transparansi, mendekatkan layanan publik, dan menyebarluaskan
            informasi secara digital kepada seluruh lapisan masyarakat. Mari
            bersama-sama kita manfaatkan teknologi untuk membangun Desa
            Karanggeneng yang lebih maju, informatif, dan sejahtera.
          </p>
          <Link
            href="/layanan"
            className="px-8 py-3 bg-white hover:bg-transparent text-sm rounded-full text-blue-800 font-medium hover:text-white border border-white/60 transition-all duration-300 ease-in-out"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Konten Bawah */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-16">
          {/* Kolom Kiri */}
          <div className="w-full md:w-4/12 flex flex-col gap-4">
            <Link href="/" className="flex gap-4 items-center">
              <img
                src="/assets/image/layout/logo-desa-karanggeneng.png"
                alt="Logo Desa Karanggeneng"
                className="w-12"
              />
              <div className="flex flex-col">
                <h1 className="text-white font-extrabold text-lg md:text-xl">
                  Desa Karanggeneng
                </h1>
                <p className="text-white text-sm">
                  Kec. Karanggeneng Kab. Lamongan
                </p>
              </div>
            </Link>
            {/* <p className="hidden md:block text-white text-sm md:text-base font-medium text-justify">
              Pemerintahan Desa Karanggeneng terus berupaya mewujudkan tata
              kelola yang transparan dan responsif untuk memajukan desa dan
              melayani masyarakat.
            </p> */}
            <h2 className="text-white text-lg md:text-xl font-semibold mt-4">
              Alamat Kantor
            </h2>
            <p className="text-white text-sm md:text-base">
              Jl. Raya Sukodadi - Karanggeneng, Kecamatan Karanggeneng,
              Kabupaten Lamongan, Jawa Timur 62254
            </p>
          </div>

          {/* Kolom Kanan */}
          <div className="w-full md:w-8/12 flex flex-col sm:flex-row gap-8 justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                Navigasi
              </h3>
              <Link
                href="/"
                className="text-white text-sm md:text-base hover:text-yellow-300"
              >
                Beranda
              </Link>
              <Link
                href="/profil"
                className="text-white text-sm md:text-base hover:text-yellow-300"
              >
                Profil Desa
              </Link>
              <Link
                href="/layanan"
                className="text-white text-sm md:text-base hover:text-yellow-300"
              >
                Layanan
              </Link>
              <Link
                href="/berita"
                className="text-white text-sm md:text-base hover:text-yellow-300"
              >
                Kabar Desa
              </Link>
              <Link
                href="/potensi"
                className="text-white text-sm md:text-base hover:text-yellow-300"
              >
                Galeri
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                Hubungi Kami
              </h3>
              <a
                href="mailto:kontak@karanggeneng.desa.id"
                className="flex gap-2 items-center text-white text-sm md:text-base hover:text-yellow-300"
              >
                <IoMdMail />
                kontak@karanggeneng.desa.id
              </a>
              <a
                href="tel:0322123456"
                className="flex gap-2 items-center text-white text-sm md:text-base hover:text-yellow-300"
              >
                <FaPhone />
                (0322) 123456
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                Ikuti Kami
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/30 pt-6">
          <p className="text-center text-white text-xs md:text-sm font-semibold">
            &copy; Copyright {currentYear} | Pemerintahan Desa Karanggeneng<span className="max-sm:hidden"> | Hak Cipta Dilindungi</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
