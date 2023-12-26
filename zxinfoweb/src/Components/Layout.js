import React from "react";
import Header from "./HeaderComponent/Header";
import { Outlet } from "react-router-dom";
import Footer from "./HomeComponent/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
