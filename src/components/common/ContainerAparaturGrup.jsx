import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ContainerAparatur from "./ContainerAparatur";

const CardModal = ({ name, jabatan, photoSrc }) => {
  return (
    <div className="w-full relative px-6 py-2 flex flex-row justify-between items-center bg-white border border-blue-800/20 shadow shadow-blue-800/20 rounded-lg gap-2 ">
      <div className="w-auto flex flex-col justify-center items-start gap-1">
        <h3 className=" text-sm md:text-xl font-extrabold text-blue-800">{name}</h3>
        <p className=" text-xs md:text-base font-extrabold text-black">{jabatan}</p>
      </div>

      <div className=" max-w-16 md:max-w-24 lg:max-w-32">
        <img src={photoSrc} className="w-full object-cover" alt={name} />
      </div>
    </div>
  );
};

const ContainerAparaturGrup = ({ title, subtitle, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="w-full relative pl-4 md:pl-12 pr-2 md:pr-8 py-3 md:py-8 cursor-pointer flex flex-row justify-between items-center bg-white border border-blue-800/20 shadow shadow-blue-800/20 rounded-lg"
        onClick={handleOpenModal}
      >
        <div className="flex flex-col justify-center items-start gap-1">
          <h3 className="text-sm md:text-2xl font-extrabold text-blue-800">
            {title}
          </h3>
          <p className="text-xs md:text-xl font-extrabold text-black">
            {subtitle}
          </p>
        </div>

        <div className=" w-auto flex flex-row md:gap-2 justify-end items-center">
          <div className={`flex flex-row flex-wrap justify-end`}>
            {data.map((item, index) => (
              <img
                key={index}
                src={item.photoSrc}
                className=" max-w-14 md:max-w-24 lg:max-w-28 object-cover rounded"
                alt={item.name}
              />
            ))}
          </div>
          <IoIosArrowForward size={25} color="black" />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white flex flex-col gap-8 px-4 md:px-10 lg:px-20 py-8 rounded-lg w-sm md:w-3xl lg:w-4xl overflow-y-auto max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col justify-center items-center gap-1">
              <h3 className="text-3xl font-extrabold text-blue-800">{title}</h3>
              <p className="text-xl font-extrabold text-black">{subtitle}</p>
            </div>

            <div className=" w-full flex flex-col gap-4">
              {data.map((item, index) => (
                <CardModal
                  key={index}
                  name={item.name}
                  jabatan={item.jabatan}
                  photoSrc={item.photoSrc}
                />
              ))}
            </div>

            <button
              className="cursor-pointer text-base medium rounded-lg bg-blue-800 text-white hover:text-blue-800 hover:bg-white px-8 py-3 transition-all ease-in-out duration-300 border border-blue-800"
              onClick={handleCloseModal}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContainerAparaturGrup;
