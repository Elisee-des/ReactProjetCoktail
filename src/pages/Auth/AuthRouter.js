import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "@/_utlis/Error";
import { Layout } from "@/pages/Public";
import Login from "@/pages/Auth/Login";

const AuthRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
