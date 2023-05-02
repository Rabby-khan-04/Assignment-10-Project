import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayouts = () => {
  return (
    <>
      <header className="sticky top-0 bg-black">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-[#0a0a0a]">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayouts;
