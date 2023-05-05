import React, { Component } from "react";
import Slider from "react-slick";
import "./MultipleRows.css";
import Film_Flip from "../FlipCard/Film_Flip";
import { useDispatch } from "react-redux";

const MultipleRows = (props) => {

  const renderFilm = () => {  
    return props.movieList.slice(0, 12).map((item, index) => {
      return (
        <div key={index} className="width-item">
          <Film_Flip item={item} />
        </div>
      );
    });
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
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
  return (
    <div>
      <h2 className="px-1 py-1 font-semibold rounded bg-gray-800 text-white text-center">
        PHIM HOT 
      </h2>
      <Slider {...settings}>{renderFilm()}</Slider>
    </div>
  );
};
export default MultipleRows;
