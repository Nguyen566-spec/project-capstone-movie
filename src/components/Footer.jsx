import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getMovieDate } from "../store/quanLyPhim/thunkAction";

const Footer = () => {
  const { movieDate } = useSelector((state) => state.quanLyMovieDate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDate());
  }, [dispatch]);
  return (
    <footer className="bg-black text-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://cybersoft.edu.vn/wp-content/uploads/2021/03/logo-cyber-nav.svg"
              className="h-10"
              alt="Flowbite Logo"
            />
          </a>
          <div className="grid grid-cols-6 gap-4">
            {movieDate.map((date, index) => (
              <img
                key={index}
                src={date.logo}
                className="w-12 h-12 rounded-full"
                alt=""
              />
            ))}
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li>
              <NavLink to="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm sm:text-center">
          © 2023{"{"}' '{"}"}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
