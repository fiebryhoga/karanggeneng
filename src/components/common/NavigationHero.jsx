import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";


const NavigationHero = ({ title, description, to }) => {
  return (
    <Link
      href="/#"
      className="w-full flex flex-col md:justify-between gap-2 md:gap-4 border-l-4 md:border-l-0 md:border-b-4 border-white hover:border-blue-800 py-1 sm:py-2 md:py-4 px-4 md:px-12 cursor-pointer group transition-all duration-300 md:bg-transparent hover:bg-white/20 bg-white/20 rounded-r-lg md:rounded-br-none md:rounded-t-lg group"
    >
      <p className="text-justify text-white text-sm font-medium">
        {description}
      </p>

      <div className="flex justify-between items-center">
        <h3 className="text-white font-semibold text-sm md:text-xl">
          {title}
        </h3>

        <div className="flex items-center text-white text-2xl">
          <IoIosArrowForward className="transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          <IoIosArrowForward className="transition-opacity duration-300 delay-150 opacity-0 group-hover:opacity-100" />

          <IoIosArrowForward className="transition-opacity duration-300 delay-300 opacity-0 group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  );
};

export default NavigationHero;
