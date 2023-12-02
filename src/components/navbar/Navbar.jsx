import React from "react";
import { NavLink } from "react-router-dom";

import { navbar as navbarLinks } from "../../assets/constants";
import "./navbar.css";

const Navbar = function () {
  const navLinks = navbarLinks.map((el) => {
    return (
      // Using navbarlinks from constants to create Navbar links
      <NavLink key={el.id} to={el.link} className="navbar--links">
        {el.name}
      </NavLink>
    );
  });
  return <div className="navbar">{navLinks}</div>; // Destructuring the navlink components
};

export default Navbar;
