import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";

const MainLayouts = () => {
  return (
    <>
      <header className="sticky top-0 bg-black z-20">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-[#0a0a0a]">
        <Footer />
      </footer>
      <Toaster position="top-center" reverseOrder={false} />
      <Tooltip id="user__name__tooltip" />
    </>
  );
};

export default MainLayouts;
