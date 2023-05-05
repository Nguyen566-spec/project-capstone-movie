import { createSlice } from "@reduxjs/toolkit";
import { history, login } from "./thunkAction";
import { USER_LOGIN } from "../../constant/api";

const initialState = {
  user: undefined,
  userInformation: [],
};

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {
    logOut: (state, action) => {
      localStorage.removeItem(USER_LOGIN);
      state.user = undefined;
    },
    getUser: (state, action) => {
      const data = localStorage.getItem(USER_LOGIN);
      if (data) {
        state.user = JSON.parse(data);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload));
      })
      .addCase(history.fulfilled, (state, action) => {
        state.userInformation = action.payload;
      })
  },
});
