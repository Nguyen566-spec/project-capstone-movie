import http from "../constant/api";

export const quanLyPhimServices = {
  getMovieList: (query = "") => {
    return http.get(`QuanLyPhim/LayDanhSachPhim${query}`);
  },
  getBannerList: () => {
    return http.get(`QuanLyPhim/LayDanhSachBanner`);
  },
  getMenuLogo: () => {
    return http.get(`QuanLyRap/LayThongTinHeThongRap`);
  },
  getTheater: (theater) => {
    return http.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theater}`);
  },
  getMovieDate: (query = "") => {
    return http.get(`QuanLyRap/LayThongTinLichChieuHeThongRap${query}`);
  },
  getMovieDetail: (query = "") => {
    return http.get(`QuanLyRap/LayThongTinLichChieuPhim${query}`);
  },
  themPhimUploadHinh: (movie) => {
    return http.post("QuanLyPhim/ThemPhimUploadHinh", movie);
  },
  layThongTinPhim: (query = "") => {
    return http.get(`QuanLyPhim/LayThongTinPhim${query}`)
  },
  capNhatPhimUpload: (movie) => {
    return http.post("QuanLyPhim/CapNhatPhimUpload", movie)
  },
  xoaPhim: (id) => {
    return http.delete(`QuanLyPhim/XoaPhim?MaPhim=${id}`)
  },
};
