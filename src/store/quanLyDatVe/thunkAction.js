import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeService } from "../../services/quanLyDatVe.services";

export const getTicketDetail = createAsyncThunk(
  "quanLyDatVe/getticketdetail",
  async (id, { rejectWithValue }) => {
    try {
      const res = await quanLyDatVeService.getTicketDetail(
        `?MaLichChieu=${id}`
      );
      return res.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const bookingTicket = createAsyncThunk(
  "quanLyDatVe/bookingticket",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await quanLyDatVeService.bookingTicket(payload);
      console.log(res.data.content);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
