import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { quanLyPhimServices } from "../services/quanLyPhim.services";
import { useDispatch, useSelector } from "react-redux";
import { getMenuLogo } from "../store/quanLyPhim/thunkAction";
import { quanLyDatVeService } from "../services/quanLyDatVe.services";
import { message } from "../module/ToastMessage";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment/moment";

const Showtime = () => {
  const { menuLogo } = useSelector((state) => state.quanLyMenuLogo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [cumRapChieu, setCumRapChieu] = useState([]);
  useEffect(() => {
    dispatch(getMenuLogo());
  }, [dispatch]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="p-8">
      <h1 className="pb-8 text-center font-bold text-4xl">Showtime</h1>
      <form
        onSubmit={handleSubmit(async (value) => {
          try {
            console.log(value);
            const res = await quanLyDatVeService.taoLichChieu({
              ...value,
              maPhim: params.id,
            });
            if (res.data.statusCode !== 500) {
              message.success("Tạo lịch chiếu thành công");
              navigate("/admin/movie");
            }
          } catch (error) {}
        })}
      >
        <div className="mb-6">
          <label
            htmlFor="tenHeThongRap"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hệ thống rạp
          </label>
          <select
            {...register("tenHeThongRap")}
            onChange={async (e) => {
              try {
                const res = await quanLyPhimServices.getTheater(e.target.value);
                setCumRapChieu(res.data.content);
              } catch (error) {}
            }}
            id="tenHeThongRap"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {menuLogo?.map((menu) => (
              <option key={menu.maHeThongRap} value={menu.maHeThongRap}>
                {menu.tenHeThongRap}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="maRap"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cụm rạp
          </label>
          <select
            {...register("maRap")}
            id="maRap"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {cumRapChieu?.map((menu) => (
              <option key={menu.maCumRap} value={menu.maCumRap}>
                {menu.tenCumRap}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="ngayChieuGioChieu"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Ngày chiếu giờ chiếu
          </label>
          <input
            {...register("ngayChieuGioChieu", {
              required: "Vui lòng nhập ngày khởi chiếu",
            })}
            id="ngayChieuGioChieu"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors?.ngayChieuGioChieu?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="giaVe"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Giá vé
          </label>
          <input
            {...register("giaVe", {
              required: "Vui lòng nhập giá vé",
            })}
            id="giaVe"
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors?.giaVe?.message}</p>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Showtime;
