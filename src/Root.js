import React from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "./components/index.js";

const Root = function () {
  return (
    <>
      {/* Layout for router outlet */}
      <div className="main-root">
        <Header />
        {/* React router path Outlet */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root;
