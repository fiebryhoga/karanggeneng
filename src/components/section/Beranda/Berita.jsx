import React from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CardBerita from "@/components/common/CardBerita";
import Link from "next/link";

const Berita = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-8 md:gap-16 justify-center items-center">


        <div className="flex flex-col justify-center items-center w-full md:max-w-3xl gap-4 text-center">
          <h1 className="text-blue-800 font-extrabold text-xl md:text-4xl">
            Informasi Terbaru
          </h1>
          <p className=" text-xs md:text-sm font-medium">
            Jangan lewatkan setiap perkembangan terbaru di Desa Karanggeneng.
            Ikuti liputan kegiatan warga, pengumuman penting, dan berita akurat
            langsung dari pemerintah desa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
          <CardBerita
            href="/berita/123"
            imageSrc="/assets/image/home/contoh-berita1.jpeg"
            title="Karang Taruna Desa Karanggeneng Sukses Kembangkan Budidaya Ikan Lele Sistem Bioflok"
            author="Admin Desa"
            date="12 Februari 2025"
            time="09:30"
            description="Sebagai upaya meningkatkan kemandirian ekonomi, Karang Taruna Tunas Harapan Desa Karanggeneng berhasil memanen ratusan kilogram ikan lele dari kolam bioflok. Inovasi ini menjadi inspirasi bagi para pemuda desa untuk terjun ke dunia wirausaha perikanan modern."
          />
          <CardBerita
            href="/berita/124"
            imageSrc="/assets/image/home/contoh-berita2.jpg"
            title="Peringatan HUT RI ke-80, Desa Karanggeneng Gelar Karnaval Meriah"
            author="Panitia HUT RI"
            date="17 Agustus 2025"
            time="14:00"
            description="Desa Karanggeneng menggelar karnaval budaya untuk memperingati Hari Kemerdekaan Republik Indonesia ke-80. Warga antusias mengenakan kostum unik yang mencerminkan keragaman budaya daerah."
          />
          <CardBerita
            href="/berita/125"
            imageSrc="/assets/image/home/contoh-berita3.jpg"
            title="Panen Raya Padi: Petani Karanggeneng Syukuri Hasil Melimpah"
            author="Admin Pertanian"
            date="5 Maret 2025"
            time="08:00"
            description="Para petani di Desa Karanggeneng menggelar panen raya padi dengan hasil melimpah. Pemerintah desa turut hadir memberikan apresiasi dan bantuan alat pertanian modern."
          />
          <CardBerita
            href="/berita/126"
            imageSrc="/assets/image/home/contoh-berita4.JPG"
            title="Posyandu Desa Karanggeneng Tingkatkan Layanan Kesehatan Balita"
            author="Kader Posyandu"
            date="10 April 2025"
            time="09:45"
            description="Posyandu Desa Karanggeneng terus berinovasi meningkatkan pelayanan kesehatan balita. Pemeriksaan rutin, imunisasi, dan edukasi gizi menjadi fokus utama demi masa depan generasi sehat."
          />
          <CardBerita
            href="/berita/127"
            imageSrc="/assets/image/home/contoh-berita5.jpeg"
            title="Remaja Masjid Karanggeneng Gelar Kegiatan Bakti Sosial Ramadan"
            author="Remas Karanggeneng"
            date="5 April 2025"
            time="16:15"
            description="Remaja Masjid Karanggeneng melaksanakan bakti sosial berupa pembagian sembako kepada warga kurang mampu. Kegiatan ini sebagai wujud kepedulian sosial menjelang Hari Raya Idul Fitri."
          />
          <CardBerita
            href="/berita/128"
            imageSrc="/assets/image/home/contoh-berita6.jpeg"
            title="Pemerintah Desa Karanggeneng Dorong Digitalisasi Pelayanan Publik"
            author="Admin Desa"
            date="22 Mei 2025"
            time="11:30"
            description="Dalam rangka meningkatkan efisiensi dan transparansi, Pemerintah Desa Karanggeneng mulai menerapkan sistem pelayanan digital. Masyarakat kini lebih mudah mengakses berbagai layanan administrasi desa secara online."
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <Link
            href="/berita"
            className="text-base medium rounded-lg bg-blue-800 text-white hover:text-blue-800 hover:bg-white px-8 py-3 transition-all ease-in-out duration-300 border border-blue-800"
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Berita;