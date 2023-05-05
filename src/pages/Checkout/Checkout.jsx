import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingTicket,
  getTicketDetail,
} from "../../store/quanLyDatVe/thunkAction";
import "./Checkout.css";
import { quanLyDatVeAction } from "../../store/quanLyDatVe/slice";
import { Tabs } from "antd";
import { history } from "../../store/quanLyNguoiDung/thunkAction";

const Checkout = () => {
  const { user, userInformation } = useSelector(
    (state) => state.quanLyNguoiDung
  );
  const { ticketDetail, bookingChairList } = useSelector(
    (state) => state.quanLyDatVe
  );
  console.log(ticketDetail);
  const dispatch = useDispatch();
  const params = useParams();
  const { thongTinPhim, danhSachGhe } = ticketDetail;
  useEffect(() => {
    dispatch(getTicketDetail(params.id));
    dispatch(history());
  }, [dispatch, params]);
  const items = [
    {
      key: "1",
      label: `01 CHỌN GHẾ VÀ THANH TOÁN`,
      children: (
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div className="shadow-lg w-4/5 p-8 mx-auto">
              <h1 className="text-4xl font-bold text-center">Màn hình</h1>
            </div>
            <div className="grid grid-cols-[repeat(16,1fr)] gap-1 my-8">
              {danhSachGhe?.map((ds, index) => {
                let classGheVip = ds.loaiGhe === "Vip" ? "gheVip" : "";
                let classGheDaDat = ds.daDat === true ? "gheDaDat" : "";
                let classGheDangDat = "";
                let classGheDaDuocDat = "";
                if (user.taiKhoan === ds.taiKhoanNguoiDat) {
                  classGheDaDuocDat = "gheDaDuocDat";
                }
                let i = bookingChairList.findIndex((b) => b.maGhe === ds.maGhe);
                if (i !== -1) {
                  classGheDangDat = "gheDangDat";
                }
                return (
                  <button
                    onClick={() => {
                      dispatch(quanLyDatVeAction.datVe(ds));
                    }}
                    disabled={classGheDaDat}
                    key={index}
                    className={`ghe ${
                      classGheDaDuocDat
                        ? classGheDaDuocDat
                        : classGheDaDat
                        ? classGheDaDat
                        : classGheDangDat
                        ? classGheDangDat
                        : classGheVip
                    }`}
                  >
                    {classGheDaDat ? "X" : ds.stt}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="min-h-screen">
            <h1 className="text-center text-2xl font-bold">0 đ</h1>
            <hr className="my-5" />
            <h2 className="text-xl">{thongTinPhim?.tenPhim}</h2>
            <div className="my-5">
              <p>Địa điểm: {thongTinPhim?.diaChi}</p>
              <p>Ngày chiếu: {thongTinPhim?.ngayChieu}</p>
            </div>
            <hr />
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 ghe"></div>
                <span>Ghế thường</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 gheVip"></div>
                <span>Ghế VIP</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 gheDangDat"></div>
                <span>Ghế mình đang đặt</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 gheDaDat"></div>
                <span>Ghế người khác đã đặt</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 gheDaDuocDat"></div>
                <span>Ghế mình đã đặt</span>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center my-5">
              <p>
                Ghế:{" "}
                {bookingChairList
                  // .sort((a, b) => { return a.stt - b.stt})
                  .map((ghe, index) => (
                    <span key={index}>{ghe.stt}, </span>
                  ))}
              </p>
              <p>
                {bookingChairList.reduce(
                  (total, item) => (total += item.giaVe),
                  0
                )}{" "}
                đ
              </p>
            </div>
            <hr />
            <div className="my-5">
              <p>Email</p>
              <p>{user.email}</p>
            </div>
            <hr />
            <div className="my-5">
              <p>Phone</p>
              <p>{user.soDT}</p>
            </div>
            <hr />
            <button
              onClick={() => {
                const thongTinDatVe = {
                  maLichChieu: params.id,
                  danhSachVe: bookingChairList,
                };
                dispatch(bookingTicket(thongTinDatVe));
                dispatch(quanLyDatVeAction.datVeHoanTat());
                dispatch(getTicketDetail(params.id));
                dispatch(history());
              }}
              className="w-full p-1 my-5 bg-blue-500 text-white rounded-lg"
            >
              Đặt vé
            </button>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: `02 KẾT QUẢ ĐẶT VÉ`,
      children: (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-[80px]">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Kết quả đặt vé
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Hãy xem thông tin phim và thời gian để có 1 buổi xem phim vui vẻ
              </p>
            </div>
            <div className="flex flex-wrap -m-[8px]">
              {userInformation.thongTinDatVe?.map((item) => (
                <div key={item.maGhe} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src={item.hinhAnh}
                    />
                    <div className="flex-grow">
                      <h2 className="text-gray-900 title-font font-medium">
                        {item.tenPhim}
                      </h2>
                      <p className="text-gray-500">{item.ngayDat}</p>
                      <p>Địa điểm: {item.danhSachGhe[0].tenHeThongRap}</p>
                      <p>
                        Tên rạp: {item.danhSachGhe[0].tenCumRap} - Ghế:{" "}
                        {item.danhSachGhe.map((i, index) => (
                          <span key={index}>{i.tenGhe}, </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },
  ];
  if (!user || user.maLoaiNguoiDung === "QuanTri") {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container mx-auto mt-[80px]">
      <Tabs items={items} />
    </div>
  );
};

export default Checkout;
