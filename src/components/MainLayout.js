import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default MainLayout;