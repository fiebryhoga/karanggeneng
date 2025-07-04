import React, { useEffect, useState } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";

const SambutanKades = () => {
  const [aosEffect, setAosEffect] = useState("fade-up");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) {
        setAosEffect("fade-right");
      } else {
        setAosEffect("fade-up");
      }
    }
  }, []);

  return (
    <SectionWrapper>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center md:gap-10">
        {/* FOTO KADES */}
        <img
          src="/assets/image/home/foto-kades.png"
          alt="foto kepala desa"
          className="w-40 sm:w-60 md:w-72 lg:w-96 flex-shrink-0"
          data-aos="fade-up"
          data-aos-duration="2000"
        />

        {/* TEKS */}
        <div className="w-full max-w-3xl flex flex-col md:gap-4 justify-center items-start">
          {/* Nama Kepala Desa */}
          <h1
            className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-center md:text-left w-full text-blue-800 font-extrabold font-sans"
            data-aos={aosEffect}
            data-aos-duration="1000"
          >
            Muhammad Joe Biden, S.H., M.H.
          </h1>
          <p
            className="text-sm sm:text-base font-semibold text-yellow-700 text-center md:text-left w-full"
            data-aos={aosEffect}
            data-aos-duration="2000"
          >
            Kepala Desa Karanggeneng 2019-2027
          </p>

          {/* Sambutan */}
          <div
            className="py-6 px-4 sm:px-6 md:px-8 lg:px-12 border-t-4 border-t-blue-800 md:border-t-0 md:border-l-4 border-l-blue-800 bg-blue-800/10 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl mt-6 md:mt-12"
            data-aos={aosEffect}
            data-aos-duration="3000"
          >
            <p className="text-xs sm:text-sm md:text-base text-black/70 font-medium text-justify leading-6 md:leading-7">
              Assalamualaikum Warahmatullahi Wabarakatuh. <br /> <br />
              Puji syukur ke hadirat Tuhan Yang Maha Esa, dengan bangga kami
              hadirkan website resmi Desa Karanggeneng sebagai wujud komitmen
              kami terhadap transparansi dan kemudahan akses informasi bagi
              seluruh masyarakat. Melalui portal digital ini, kami berupaya
              menyajikan informasi seputar layanan publik, berita terkini, serta
              mempromosikan berbagai potensi desa secara cepat dan akurat. Mari
              kita manfaatkan media ini sebagai jembatan komunikasi untuk
              bersama-sama membangun desa kita tercinta menjadi lebih maju dan
              sejahtera.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SambutanKades;
