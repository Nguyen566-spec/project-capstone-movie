import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/quanLyPhim.services";
import { GROUP_ID } from "../../constant/api";

export const getmovieList = createAsyncThunk(
  "quanLyPhim/getmovielist",
  async (payload, { rejectWithValue }) => {
    try {
      if (payload) {
        const res = await quanLyPhimServices.getMovieList(
          `?maNhom=${GROUP_ID}&tenPhim=${payload}`
        );
        return res.data.content;
      }
      const res = await quanLyPhimServices.getMovieList(`?maNhom=${GROUP_ID}`);
      return res.data.content;

      // console.log("res", res);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getBannerList = createAsyncThunk(
  "quanLyBanner/getbannerlist",
  async (payload, { rejectWithValue }) => {
    try {
      const resBanner = await quanLyPhimServices.getBannerList();

      // console.log("res", resBanner.data.content);
      return resBanner.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMenuLogo = createAsyncThunk(
  "quanLyMenuLogo/getmenulogo",
  async (payload, { rejectWithValue }) => {
    try {
      const resMenuLogo = await quanLyPhimServices.getMenuLogo();

      // console.log("res", resMenuLogo.data.content);
      return resMenuLogo.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMovieDate = createAsyncThunk(
  "quanLyMovieDate/getmoviedate",
  async (payload, { rejectWithValue }) => {
    try {
      const getMovieDate = await quanLyPhimServices.getMovieDate(
        `?maNhom=${GROUP_ID}`
      );

      // console.log("res", getMovieDate.data.content);
      return getMovieDate.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMovieDetail = createAsyncThunk(
  "quanLyMovieDetail/getmoviedetail",
  async (id, { rejectWithValue }) => {
    try {
      const getMovieDetail = await quanLyPhimServices.getMovieDetail(
        `?MaPhim=${id}`
      );

      // console.log("res", getMovieDate.data.content);
      return getMovieDetail.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const layThongTinPhim = createAsyncThunk(
  "layThongTinPhim/laythongtinphim",
  async (id, { rejectWithValue }) => {
    try {
      const layThongTinPhim = await quanLyPhimServices.layThongTinPhim(
        `?MaPhim=${id}`
      );

      // console.log("res", getMovieDate.data.content);
      return layThongTinPhim.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
