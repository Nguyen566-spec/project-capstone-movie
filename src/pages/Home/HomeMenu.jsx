import { Radio, Space, Tabs } from "antd";
import { Fragment, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getMenuLogo, getMovieDate } from "../../store/quanLyPhim/thunkAction";
import TabPane from "antd/es/tabs/TabPane";
import moment from 'moment'

const HomeMenu = () => {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  const dispatch = useDispatch();
//   const { menuLogo } = useSelector((state) => state.quanLyMenuLogo);
  const { movieDate } = useSelector((state) => state.quanLyMovieDate);

  useEffect(() => {
    // dispatch(getMenuLogo());
    dispatch(getMovieDate());
  }, [dispatch]);

  //   console.log(menuLogo);
    console.log(movieDate);

  const RenderMenu = () => {
    return movieDate?.map((heThongRap, index) => {
      return (
        <TabPane
          tab={<img src={heThongRap.logo} className="rounded-full" width="50" alt="" />}
          key={index}
        >
            <Tabs tabPosition={tabPosition}>
                {heThongRap.lstCumRap?.map((cumRap, index) => {
                    return <TabPane tab={
                        <div style={{width: '300px', display: 'flex'}}>
                        <img src={cumRap.hinhAnh} width="50" alt=""/>
                        <div className="text-left ml-2"> 
                            {cumRap.tenCumRap}
                            <p className="text-red-200">Chi tiết</p>
                        </div>
                        </div>
                    }
                    key={index}>
                        {cumRap.danhSachPhim?.slice(0, 4).map((phim, index) =>{
                            return <Fragment key={index}>
                                <div className="my-5">
                                    <div style={{display: 'flex'}}>
                                        <img src={phim.hinhAnh} style={{height: 75, width: 75}} alt={phim.tenPhim} onError={(e)=>{
                                            e.target.onerror = null;
                                            e.target.src = "https://picsum.photos/75/75"
                                        }}/>
                                        <div className="ml-2">
                                            <h1 className="text-green-700">{phim.tenPhim}</h1>
                                            <p>{cumRap.diaChi}</p>
                                            <div className="grid grid-cols-6 gap-6">
                                            {phim.lstLichChieuTheoPhim?.slice(0, 10).map((lichChieu, index) => {
                                                return <NavLink className="text-green-400" key={index}>
                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                </NavLink>
                                            })}
                                            </div>                                       
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        })}
                    </TabPane>
                })}
            </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <>
      <Tabs tabPosition={tabPosition}>{RenderMenu()}</Tabs>
    </>
  );
};
export default HomeMenu;
