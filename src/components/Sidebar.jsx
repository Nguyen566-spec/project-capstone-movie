import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navs = [
    {
      name: "Dashboard",
      link: "",
    },
    {
      name: "Movie",
      link: "/movie",
    },
  ];
  return (
    <div className="w-64 h-screen bg-black text-white sticky left-0 top-0">
      <h1 className="text-center text-4xl font-bold p-4">Admin</h1>
      <div className="flex flex-col">
        {navs.map((nav) => (
          <NavLink
            key={nav.name}
            to={`/admin${nav.link}`}
            className="py-4 px-8 border-y border-gray-500 hover:bg-slate-800"
          >
            {nav.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;