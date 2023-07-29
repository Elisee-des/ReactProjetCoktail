import React from "react";
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import { Outlet } from "react-router-dom";

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
