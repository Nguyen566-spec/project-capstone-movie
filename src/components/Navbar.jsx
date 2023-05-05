import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate } from "react-router-dom";
import { quanLyNguoiDungActions } from "../store/quanLyNguoiDung/slice";

const Navbar = () => {
  const { user } = useSelector((state) => state.quanLyNguoiDung);
  const dispatch = useDispatch();
  if (!user || user.maLoaiNguoiDung !== "QuanTri") {
    return <Navigate to="/" />;
  }
  return (
    <div className="bg-blue-500 text-white sticky top-0 z-50 p-4 flex justify-end gap-4">
      <NavLink to="/">Hello, {user.hoTen}</NavLink>
      <button
        onClick={() => {
          dispatch(quanLyNguoiDungActions.logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
