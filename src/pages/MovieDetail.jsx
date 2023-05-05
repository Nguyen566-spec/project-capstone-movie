import React, { Fragment, useEffect } from "react";
import "../assets/styles/circle.css";
import { Rate, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../store/quanLyPhim/thunkAction";
import { NavLink, useParams } from "react-router-dom";
import moment from "moment";

const MovieDetail = () => {
  const { movieDetail } = useSelector((state) => state.quanLyMovieDetail);
  console.log(movieDetail);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getMovieDetail(params.id));
  }, [dispatch, params]);
  return (
    <div className="bg-[url(https://picsum.photos/1000)] min-h-screen bg-cover bg-center">
      <div className="flex justify-center items-center space-x-8">
        <img src={movieDetail.hinhAnh} className="w-60" alt="" />
        <div className="w-[500px]">
          <p>{movieDetail.ngayKhoiChieu}</p>
          <p className="text-4xl font-bold">{movieDetail.tenPhim}</p>
          <p>{movieDetail.moTa}</p>
        </div>
        <div>
          <p className="text-2xl ml-4 font-semibold">Đánh giá</p>
          <div className="text-2xl">
            <Rate allowHalf defaultValue={movieDetail.danhGia} />
          </div>
          {/* <div className={`c100 p${movieDetail.danhGia * 10}`}>
              <span>{movieDetail.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div> */}
        </div>
      </div>
      <div className="mt-5 container mx-auto">
        <Tabs
          className="bg-white"
          defaultActiveKey="1"
          tabPosition="left"
          items={movieDetail.heThongRapChieu?.map((item, i) => {
            return {
              label: <img src={item?.logo} width={50} height={50} alt="" />,
              key: i,
              children: (
                <div>
                  {item?.cumRapChieu.map((c, index) => (
                    <Fragment key={index}>
                      <div className="flex items-center gap-4">
                        <img src={c.hinhAnh} width={50} height={50} alt="" />
                        <div className="flex flex-col">
                          <p className="font-bold text-2xl">{c.tenCumRap}</p>
                          <p>{c.tenCumRap}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-4">
                        {c.lichChieuPhim.map((l, i) => (
                          <NavLink
                            key={i}
                            to={`/checkout/${l.maLichChieu}`}
                            className="text-2xl font-bold"
                          >
                            {moment(l.ngayChieuGioChieu).format("hh:mm A")}
                          </NavLink>
                        ))}
                      </div>
                    </Fragment>
                  ))}
                </div>
              ),
            };
          })}
        />
      </div>
    </div>
  );
};

export default MovieDetail;
