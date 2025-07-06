import React from "react";

const ContainerAparatur = ({ name, jabatan, photoSrc }) => {
  return (
    <div className="w-full relative px-4 py-3 md:px-12 md:py-4 flex flex-row justify-between items-center bg-white border border-blue-800/10 shadow-md shadow-blue-800/20 rounded-lg">
      <div className="flex flex-col justify-center items-start gap-1 w-full ">
        <h3 className="text-sm md:text-2xl font-extrabold text-blue-800">{name}</h3>
        <p className=" text-xs md:text-xl font-extrabold text-black">{jabatan}</p>
      </div>

      <div className="max-w-24 md:max-w-36 lg:max-w-40">
        <img src={photoSrc} className="w-full object-cover" alt={name} />
      </div>
    </div>
  );
};

export default ContainerAparatur;
