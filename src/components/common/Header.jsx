import React from "react";

const Header = ({ header, deskripsi }) => {
  return (
    <div className="flex flex-row w-full justify-center items-center h-80 sm:h-72 relative mt-20">
      {/* Background Image */}
      <div className="w-full h-full absolute top-0 left-0 bg-black">
        <img
          className="w-full h-full object-cover opacity-90"
          src="/assets/image/common/bg-header.png"
          alt="Portfolio Background"
        />
      </div>

      {/* Konten Teks */}
      <div className="z-10 flex flex-col justify-center items-center w-full h-full gap-6 md:gap-6 text-white text-center px-4 sm:px-8">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold">{header}</h1>
        <p className="text-center text-xs sm:text-sm lg:text-base font-medium max-w-4xl">{deskripsi}</p>
      </div>
    </div>
  );
};

export default Header;
