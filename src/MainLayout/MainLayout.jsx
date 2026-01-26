import React from "react";
import Navber from "../Component/Navber";
import Footer from "../Component/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="">
      <header
        className=""
      >
        <Navber></Navber>
      </header>
      <main className="bg-white">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
