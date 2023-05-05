import http from "../constant/api";

export const quanLyDatVeService = {
  getTicketDetail: (query = "") =>
    http.get(`QuanLyDatVe/LayDanhSachPhongVe${query}`),
  bookingTicket: (payload) => http.post("QuanLyDatVe/DatVe", payload),
  taoLichChieu: (date) => {
    return http.post("QuanLyDatVe/TaoLichChieu", date);
  },
};
