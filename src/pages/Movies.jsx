import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getmovieList } from "../store/quanLyPhim/thunkAction";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Table } from "antd";
import { quanLyPhimServices } from "../services/quanLyPhim.services";
import { message } from "../module/ToastMessage";
import Search from "antd/es/input/Search";

const Movies = () => {
  const { register, handleSubmit } = useForm();
  const { movieList } = useSelector((state) => state.quanLyPhim);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmovieList(""));
  }, [dispatch]);
  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      sorter: {
        compare: (a, b) => a.maPhim - b.maPhim,
      },
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, file) => (
        <img src={file.hinhAnh} alt={file.tenPhim} width={50} />
      ),
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: {
        compare: (a, b) =>
          a.tenPhim.toLowerCase() > b.tenPhim.toLowerCase() ? 1 : -1,
      },
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      sorter: {
        compare: (a, b) =>
          a.moTa.toLowerCase() > b.moTa.toLowerCase() ? 1 : -1,
      },
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      render: (text, film) => (
        <>
          <NavLink
            to={`/admin/movie/edit/${film.maPhim}`}
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-[8px]"
          >
            Sửa
          </NavLink>
          <button
            onClick={handleSubmit(async () => {
              try {
                const res = await quanLyPhimServices.xoaPhim(film.maPhim);
                if (res.data.statusCode) {
                  message.success("Xóa thành công");
                  dispatch(getmovieList());
                }
              } catch (error) {}
            })}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-[8px]"
          >
            Xóa
          </button>
          <NavLink
            to={`/admin/movie/showtime/${film.maPhim}`}
            className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-[8px]"
          >
            Showtime
          </NavLink>
        </>
      ),
    },
  ];
  return (
    <div className="p-8">
      <div className="flex justify-between items-center pb-8">
        <h1 className="font-bold text-4xl text-center">Movie list</h1>
        <NavLink
          to="/admin/movie/add"
          className="px-4 py-[8px] rounded-lg bg-green-500 text-white"
        >
          Thêm mới
        </NavLink>
      </div>
      <Search
        className="mb-8"
        placeholder="Enter search movie"
        onSearch={(value) => {
          dispatch(getmovieList(value));
        }}
      />
      {/* <form
        className="pb-8"
        onSubmit={handleSubmit((value) => {
          dispatch(getmovieList(value.movieSearch));
        })}
      >
        <label
          htmlFor="default-search"
          className="mb-[8px] text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Tìm kiếm
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            {...register("timKiem")}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-[8px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Tìm kiếm
          </button>
        </div>
      </form> */}

      <Table columns={columns} dataSource={movieList} />
    </div>
  );
};

export default Movies;
