import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col grow">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;