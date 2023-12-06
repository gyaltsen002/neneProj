import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./components";

const Layout = function () {
  return (
    <div className="main--root">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
