import { message } from "antd";
import axios from "axios";
import { toast } from "react-toastify";

const TokenCyberSoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3NCIsIkhldEhhblN0cmluZyI6IjE2LzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDgyMjQwMDAwMCIsIm5iZiI6MTY2ODI3MjQwMCwiZXhwIjoxNjk0OTcwMDAwfQ.3TXoqM7cOKUQgRGc0plbpUsV406snlZBBeHlA7RxJYk";
const baseURL = "https://movienew.cybersoft.edu.vn/api/";

const http = axios.create();

export const GROUP_ID = "GP14"
export const USER_LOGIN = "user"

http.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      TokenCyberSoft,
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))?.accessToken}`,
    },
    baseURL,
  };
});
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log("error: ", error);
    if (error?.response?.status === 403) {
      toast.error("Không thể truy cập API");
    }
    if (error?.response?.status === 400) {
      toast.error(error.response?.data?.content);
    } 
    if (error?.response?.status === 404) {
      toast.error(error.response?.data?.content);
    } 
    if (error?.response?.status === 500) {
      toast.error(error.response?.data?.content);
    } 
    else {
      console.log(error);
    }
  }
);

export default http;
