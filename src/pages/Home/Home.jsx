import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import { getmovieList } from "../../store/quanLyPhim/thunkAction";
import MultipleRows from "../../components/Slick/MultipleRows";
import HomeMenu from "./HomeMenu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeCarousel from "./HomeCarousel";

const Home = () => {
  const dispatch = useDispatch();
  const { movieList, isLoading } = useSelector((state) => state.quanLyPhim);
  useEffect(() => {
    dispatch(getmovieList());
  }, [dispatch]);
  // console.log(movieList);

  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-center gap-2">
        {[...Array(10)].map((e, index) => {
          return (
            <div key={index} className="flex flex-col w-1/4">
              <Skeleton.Input style={{ width: 300, height: 400 }} />
              <Skeleton.Input
                style={{ width: 300, height: 60, marginTop: "10px" }}
              />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <HomeCarousel />
      <div className="max-w-screen-xl mx-auto p-4 ">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto px-5 py-9">
            <MultipleRows movieList={movieList} />
          </div>
        </section>
        <div className="mx-36">
          <HomeMenu />
        </div>
      </div>
    </>
  );
};

export default Home;
