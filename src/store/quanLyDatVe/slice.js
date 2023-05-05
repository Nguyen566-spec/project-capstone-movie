import { createSlice } from "@reduxjs/toolkit";
import { bookingTicket, getTicketDetail } from "./thunkAction";
import { message } from "../../module/ToastMessage";

const initialState = {
  ticketDetail: {},
  bookingChairList: [],
};

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeAction } =
  createSlice({
    name: "quanLyDatVe",
    initialState,
    reducers: {
      datVe: (state, action) => {
        const updateChairList = [...state.bookingChairList];
        let index = updateChairList.findIndex(
          (b) => b.maGhe === action.payload.maGhe
        );
        if (index !== -1) {
          updateChairList.splice(index, 1);
        } else {
          updateChairList.push(action.payload);
        }
        state.bookingChairList = updateChairList;
      },
      datVeHoanTat: (state, action) => {
        state.bookingChairList = [];
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getTicketDetail.fulfilled, (state, action) => {
          state.ticketDetail = action.payload;
        })
        .addCase(bookingTicket.fulfilled, (state, action) => {
          message.success(action.payload);
        })
        .addCase(bookingTicket.rejected, (state, action) => {
          message.error(action.payload);
        })
    },
  });
