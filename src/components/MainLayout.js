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
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "33.31px 25px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
