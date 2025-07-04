import React from "react";
import NavigationHero from "@/components/common/NavigationHero";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative bg-gradient-to-t from-black via-black to-blue-900 overflow-hidden">
      {/* Background image */}
      <img
        src="/assets/image/home/bg-hero.jpeg"
        className="w-full h-full absolute object-cover opacity-35"
        alt="Background"
      />

      {/* Content */}
      <div className="flex pb-10 flex-col justify-end lg:justify-center items-end lg:items-center gap-14 sm:gap-20 lg:gap-0 w-full h-full relative z-10 lg:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Text */}
        <div className="flex flex-col justify-center items-center w-full gap-6 lg:gap-2 text-center">
          <h1 className="text-lg sm:text-xl lg:text-2xl text-white font-extrabold font-sans">
            SELAMAT DATANG
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold font-sans leading-tight">
            WEBSITE RESMI DESA KARANGGENENG
          </h2>
          <p className="hidden md:px-16 lg:px-0 md:block text-xs sm:text-sm lg:text-base text-white font-medium mt-6 max-w-4xl">
            Sumber informasi dan portal digital Desa Karanggeneng. Website ini
            adalah langkah kami untuk mewujudkan pemerintahan yang transparan
            dan informatif. Mari bersama-sama membangun Desa Karanggeneng yang
            lebih maju melalui kemudahan akses informasi.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="w-full md:flex lg:flex-none md:justify-center md:items-center lg:absolute bottom-0 block py-3 lg:py-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 w-full md:w-lg lg:w-full ">
            <NavigationHero
              title="Info Terbaru"
              description="Temukan berita, pengumuman penting, dan jadwal kegiatan terbaru dari Pemerintah Desa Karanggeneng."
              to="/berita"
            />
            <NavigationHero
              title="Galeri Warga"
              description="Jelajahi koleksi foto dan video berbagai momen kebersamaan dan kegiatan warga desa kami."
              to="/galeri"
            />
            <NavigationHero
              title="Layanan Pengaduan"
              description="Sampaikan aspirasi, saran, atau laporan Anda terkait layanan publik melalui kanal pengaduan resmi ini."
              to="/pengaduan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
