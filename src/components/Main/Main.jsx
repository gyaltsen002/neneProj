import React from "react";

import login from "../../assets/proto/login.webp";
import "./main.css";

const Main = function () {
  return (
    <div className="main">
      Hello how are you
      <img alt="head_img" className="main--img" src={login} />
    </div>
  );
};

export default Main;
