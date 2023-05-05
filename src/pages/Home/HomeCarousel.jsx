import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBannerList } from "../../store/quanLyPhim/thunkAction";
const HomeCarousel = () => {
  const contentStyle = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const dispatch = useDispatch();

  const { bannerList } = useSelector((state) => state.quanLyBanner);
  useEffect(() => {
    dispatch(getBannerList());
  }, [dispatch]);

//   console.log(bannerList);

  const renderImg = () => {
    return bannerList?.map((item, index) => {
      return (
        <div key={index}>
          <div style={{...contentStyle, backgroundImage: `url(${item.hinhAnh})`}} >
            <img src={item.hinhAnh} className="w-full opacity-0" alt={item.hinhAnh}></img>
          </div>
        </div>
      );
    });
  };

  return (
    <Carousel
      afterChange={onChange}
      style={{ position: "relative", zIndex: "1" }}
    >
      {renderImg()}
      
    </Carousel>
  );
};

export default HomeCarousel;
