import http from "../constant/api";

export const quanLyNguoiDungServices = {
  register: (payload) => http.post("QuanLyNguoiDung/DangKy", payload),
  login: (payload) => http.post("QuanLyNguoiDung/DangNhap", payload),
  history: (payload) => http.post("QuanLyNguoiDung/ThongTinTaiKhoan", payload),
};
