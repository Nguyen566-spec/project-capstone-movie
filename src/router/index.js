import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import User from "../pages/User";
import MovieDetail from "../pages/MovieDetail";
import Checkout from "../pages/Checkout/Checkout";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Movies from "../pages/Movies";
import MovieAdd from "../pages/MovieAdd";
import MovieEdit from "../pages/MovieEdit";
import Showtime from "../pages/Showtime";

const Router = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "detail/:id",
          element: <MovieDetail />,
        },
        {
          path: "checkout/:id",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "movie",
          element: <Movies />,
        },
        {
          path: "movie/add",
          element: <MovieAdd />,
        },
        {
          path: "movie/edit/:id",
          element: <MovieEdit />,
        },
        {
          path: "movie/showtime/:id",
          element: <Showtime />,
        },
      ],
    },
  ]);
  return elements;
};

export default Router;
