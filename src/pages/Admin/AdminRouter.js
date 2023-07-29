import React from "react";
import { Route, Routes } from "react-router-dom";
import { ALayout, Dashboard } from "@/pages/Admin";
import { User, UserAdd, UserEdit } from "@/pages/Admin/User";
import { Coktail, CoktailAdd, CoktailEdit } from "@/pages/Admin/Coktail";
import Error from "@/_utlis/Error";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<ALayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user">
          <Route path="index" element={<User />} />
          <Route path="add" element={<UserAdd />} />
          <Route path="edit" element={<UserEdit />} />
        </Route>
        <Route path="coktail">
          <Route path="index" element={<Coktail />} />
          <Route path="add" element={<CoktailAdd />} />
          <Route path="edit" element={<CoktailEdit />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
