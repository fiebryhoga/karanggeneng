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
      <div className="flex pb-10 flex-col justify-end md:justify-center items-end md:items-center gap-20 md:gap-0 w-full h-full relative z-10 md:pb-24 sm:px-10 md:px-20">
        {/* Welcome Text */}
        <div className="flex flex-col justify-center items-center w-full gap-6 md:gap-2 text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl text-white font-extrabold font-sans">
            SELAMAT DATANG
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold font-sans leading-tight">
            WEBSITE RESMI DESA KARANGGENENG
          </h2>
          <p className="hidden md:block text-xs sm:text-sm md:text-base text-white font-medium mt-6 max-w-4xl">
            Sumber informasi dan portal digital Desa Karanggeneng. Website ini
            adalah langkah kami untuk mewujudkan pemerintahan yang transparan
            dan informatif. Mari bersama-sama membangun Desa Karanggeneng yang
            lebih maju melalui kemudahan akses informasi.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="w-full md:absolute bottom-0 md:px-20 block py-3 px-8">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-0 w-full">
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
