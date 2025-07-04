import React from "react";

const SectionWrapper = ({ children }) => {
  return (
    <section className="w-full py-6 lg:py-10">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-28">{children}</div>
    </section>
  );
};

export default SectionWrapper;
