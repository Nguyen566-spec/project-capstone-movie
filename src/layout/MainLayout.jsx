import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home/Home";

const MainLayout = () => {
  return (
    <div className="MainLayout flex flex-col h-full">
      <Header />
      {/* <div className="MainContent flex-1 min-h-screen">
        <Home />
      </div> */}
      <Outlet/>
      <Footer />
    </div>
  );
};

export default MainLayout;
