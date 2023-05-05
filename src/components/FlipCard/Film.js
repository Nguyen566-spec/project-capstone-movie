import React from "react";

const Film = (props) => {
  const { phim } = props;
  //   console.log(phim);
  return (
    <div className="mr-2 h-full text-center relative bg-gray-100 border-opacity-75 rounded-lg overflow-hidden">
      <div
        style={{
          background: `url(${phim.hinhAnh}), url(https://picsum.photos/1000/200)`,
          backgroundPosition: "center",
          backgroundSize: "100%",
        }}
      >
        <img
          className="w-full opacity-0"
          style={{ height: "300px" }}
          src={phim.hinhAnh}
          alt={phim.tenPhim}
        />
      </div>
      <h1 className="title-font text-lg font-medium text-gray-900 mb-1 mt-1">
        {phim.tenPhim}
      </h1>
      <p className="leading-relaxed mb-2 h-16">{phim.moTa.length > 100 ? <span>{phim.moTa.slice(0,100)}...</span> : <span>{phim.moTa}</span> }</p>
      <a className="text-indigo-500 items-center md:mb-1 lg:mb-0">
        Đặt vé
      </a>
    </div>
  );
};

export default Film;
