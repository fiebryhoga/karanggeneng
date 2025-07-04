import React from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CardDemografi from "@/components/common/CardDemografi";
import {
  FaPeopleRoof,
  FaPerson,
  FaPersonDress,
  FaUsers,
  FaChildren,
  FaUserClock,
} from "react-icons/fa6";
import Link from "next/link";
  

const DemografiSingkat = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-8 md:gap-16 justify-center items-center">

        
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center w-full md:max-w-3xl gap-4 text-center">
          <h1 className="text-blue-800 font-extrabold text-xl md:text-4xl">
            Demografi Singkat
          </h1>
          <p className=" text-xs md:text-sm font-medium">
            Lihat potret kependudukan Desa Karanggeneng dalam angka. Data
            statistik terbaru mengenai jumlah jiwa, komposisi usia, dan mata
            pencaharian warga kami.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          <CardDemografi
            icon={FaPeopleRoof}
            title="Kepala Keluarga"
            value={1432}
          />
          <CardDemografi
            icon={FaPerson}
            title="Laki-Laki"
            value={2876}
          />
          <CardDemografi
            icon={FaPersonDress}
            title="Perempuan"
            value={2931}
          />
          <CardDemografi icon={FaUsers} title="Penduduk" value={5807} />
          <CardDemografi
            icon={FaChildren}
            title="Anak-anak"
            value={987}
          />
          <CardDemografi icon={FaUserClock} title="Lansia" value={456} />
        </div>
        <div className="w-full flex justify-center items-center">
            <Link href="/#" className="text-base medium rounded-lg bg-blue-800 text-white hover:text-blue-800 hover:bg-white px-8 py-3 transition-all ease-in-out duration-300 border border-blue-800">
            Lihat Selengkapnya
            </Link>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default DemografiSingkat;
