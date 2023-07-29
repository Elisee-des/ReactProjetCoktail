import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/PublicLayout/Home";
import Service from "@/pages/PublicLayout/Service";
import Contact from "@/pages/PublicLayout/Contact";
import Error from "@/_utlis/Error";
import Layout from "@/pages/PublicLayout/Layout";

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
