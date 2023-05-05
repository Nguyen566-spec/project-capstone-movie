import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmovieList } from "../store/quanLyPhim/thunkAction";
import { Skeleton } from "antd";
import Slider from "react-slick";
import Film from "../components/FlipCard/Film";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movieList, isLoading } = useSelector((state) => state.quanLyPhim);
  useEffect(() => {
    dispatch(getmovieList());
  }, [dispatch]);

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
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  const renderFilm = () => {
    return movieList?.map((item, index) => {
      return (
        <div key={index} >
            <Film />
        </div>
      );
    });
  };

  return (
    <div>
    <h2>Multiple Rows</h2>
    <Slider {...settings}>
      {renderFilm()}
    </Slider>
  </div>
  );
};

export default MovieList;
