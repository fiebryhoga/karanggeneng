import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <main className="flex min-h-screen flex-col w-full justify-start items-center">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
