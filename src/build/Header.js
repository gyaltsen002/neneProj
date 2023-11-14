import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar } from "../components/index";
import logo from "../assets/proto/logo.webp";
import "./header.css";

const Header = function () {
  const [navIdentifier, setNavIdentifier] = React.useState(null); // To identify Home

  const changeIdentifier = function (path) {
    setNavIdentifier(path);
  };

  return (
    <div className="header">
      <NavLink
        to="/"
        className={
          (navIdentifier === "home" || !navIdentifier) && "header--notactive" // Changing the active effect if it's Home/Root
        }
        onClick={() => changeIdentifier("home")}
      >
        <img className="header--logo" src={logo} />
      </NavLink>
      {/* The top ones are NavLink from react-router-dom */}

      {/* The bottom are Navlinks */}
      <Navbar />
    </div>
  );
};

export default Header;
