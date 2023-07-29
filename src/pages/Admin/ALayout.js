import React from "react";
import { Outlet } from "react-router-dom";
import AHeader from "@/components/admin/AHeader";
import Footer from "@/components/public/Footer";
import Sidebar from "@/components/admin/Sidebar";
import PageTitle from "@/components/admin/PageTitle";

const ALayout = () => {
  return (
    <>
      <AHeader />
      <Sidebar />
      <main id="main" className="main">
        <PageTitle />

        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ALayout;
