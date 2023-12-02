import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar } from "../index";
import logo from "../../assets/proto/logo.webp";
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
        <img alt="header__logo" className="header--logo" src={logo} />
      </NavLink>
      {/* The ones above are NavLink from react-router-dom */}

      {/* The bottom are Navlinks */}
      <Navbar />
    </div>
  );
};

export default Header;
