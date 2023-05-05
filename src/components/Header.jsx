import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { quanLyNguoiDungActions } from "../store/quanLyNguoiDung/slice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.quanLyNguoiDung);

  return (
    <nav className=" bg-black bg-opacity-40 text-white fixed w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <NavLink to="/" className="flex items-center">
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2021/03/logo-cyber-nav.svg"
            className="h-10"
            alt="Flowbite Logo"
          />
        </NavLink>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <NavLink
                to="/"
                href="#"
                className="block py-2 pl-3 pr-4  rounded md:bg-transparent md:p-0 hover:text-blue-500"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <a
                href
                className="block py-2 pl-3 pr-4  rounded md:bg-transparent md:p-0 hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href
                className="block py-2 pl-3 pr-4  rounded md:bg-transparent md:p-0 hover:text-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href
                className="block py-2 pl-3 pr-4  rounded md:bg-transparent md:p-0 hover:text-blue-500"
              >
                Pricing
              </a>
            </li>
            {!!!user && (
              <li className="hover:text-blue-500">
                <NavLink to="/login">Register/Login</NavLink>
              </li>
            )}
            {user && (
              <div className="flex gap-1">
                {user.maLoaiNguoiDung === "QuanTri" ? (
                  <p
                    onClick={() => {
                      navigate("/admin");
                    }}
                    className="cursor-pointer"
                  >
                    Admin{" "}
                  </p>
                ) : (
                  <p
                    onClick={() => {
                      navigate("/user");
                    }}
                    className="cursor-pointer"
                  >
                    Hello, {user?.taiKhoan}{" "}
                  </p>
                )}
                <button
                  className="p-[8px] border border-[#000] rounded-lg hover:bg-slate-400 hover transition-all duration-300 relative top-[-10px]"
                  onClick={() => {
                    dispatch(quanLyNguoiDungActions.logOut());
                    navigate("/");
                  }}
                >
                  Log out
                </button>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
