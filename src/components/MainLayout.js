import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div
      style={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <div style={{ display: "flex", gap: "20px" }}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
