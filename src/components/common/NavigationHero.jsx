import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const NavigationHero = ({ title, description, to }) => {
  return (
    <>
      {/* Animasi Global */}
      <style jsx global>{`
        @keyframes fadeLoop {
          0%,
          80%,
          100% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
        }

        .group:hover .arrow-animate {
          animation: fadeLoop 1.2s infinite;
        }
      `}</style>

      <Link
        href={to}
        className="w-full flex flex-col lg:justify-between gap-2 lg:gap-4 border-l-4 lg:border-l-0 lg:border-b-4 border-white md:border-white/20 hover:border-white py-1 sm:py-2 lg:py-4 px-4 lg:px-12 cursor-pointer group transition-all duration-300 lg:bg-transparent hover:bg-white/20 bg-white/20 rounded-r-lg lg:rounded-br-none lg:rounded-t-lg"
      >
        <p className="text-justify text-white text-sm font-medium">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <h3 className="text-white font-semibold text-sm lg:text-xl">
            {title}
          </h3>

          {/* Panah bergerak satu per satu */}
          <div className="flex items-center text-white text-2xl gap-1">
            <IoIosArrowForward
              className="opacity-0 group-hover:opacity-100 arrow-animate"
              style={{ animationDelay: "0s" }}
            />
            <IoIosArrowForward
              className="opacity-0 group-hover:opacity-100 arrow-animate"
              style={{ animationDelay: "0.2s" }}
            />
            <IoIosArrowForward
              className="opacity-0 group-hover:opacity-100 arrow-animate"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default NavigationHero;
