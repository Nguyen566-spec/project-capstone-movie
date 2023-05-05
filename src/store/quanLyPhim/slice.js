import { createSlice } from "@reduxjs/toolkit";
import {
  getBannerList,
  getMenuLogo,
  getMovieDate,
  getMovieDetail,
  getmovieList,
  layThongTinPhim,
} from "./thunkAction";

const initialState = {
  movieList: [],
  isLoading: false,
  error: undefined,
  bannerList: [],
  menuLogo: [],
  movieDate: [],
  movieDetail: {},
  movie: {},
  movieSearch: "",
};

export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } =
  createSlice({
    name: "quanLyPhim",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      //Xử lý các actions tạo từ createAsyncThunk

      builder
        .addCase(getmovieList.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(getmovieList.fulfilled, (state, action) => {
          state.movieList = action.payload;
          state.isLoading = false;
        })
        .addCase(getmovieList.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  });

export const { reducer: quanLyBannerReducer, actions: quanLyBannerAction } =
  createSlice({
    name: "quanLyBanner",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      //Xử lý các actions tạo từ createAsyncThunk
      builder.addCase(getBannerList.fulfilled, (state, action) => {
        state.bannerList = action.payload;
      });
    },
  });

export const { reducer: quanLyMenuLogoReducer, actions: quanLyMenuLogoAction } =
  createSlice({
    name: "quanLyMenuLogo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      //Xử lý các actions tạo từ createAsyncThunk
      builder.addCase(getMenuLogo.fulfilled, (state, action) => {
        state.menuLogo = action.payload;
      });
    },
  });

export const {
  reducer: quanLyMovieDateReducer,
  actions: quanLyMovieDateAction,
} = createSlice({
  name: "quanLyMovieDate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Xử lý các actions tạo từ createAsyncThunk
    builder.addCase(getMovieDate.fulfilled, (state, action) => {
      state.movieDate = action.payload;
    });
  },
});

export const {
  reducer: quanLyMovieDetailReducer,
  actions: quanLyMovieDetailAction,
} = createSlice({
  name: "quanLyMovieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Xử lý các actions tạo từ createAsyncThunk
    builder.addCase(getMovieDetail.fulfilled, (state, action) => {
      state.movieDetail = action.payload;
    });
  },
});

export const {
  reducer: layThongTinPhimReducer,
  actions: layThongTinPhimAction,
} = createSlice({
  name: "layThongTinPhim",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Xử lý các actions tạo từ createAsyncThunk
    builder.addCase(layThongTinPhim.fulfilled, (state, action) => {
      state.movie = action.payload;
    });
  },
});
