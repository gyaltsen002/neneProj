import React from "react";
import { NavLink } from "react-router-dom";

import { navbar as navbarLinks } from "../../assets/constants";
import MobileNav from "../../mobile-components/navbar/MobileNav";
import "./navbar.css";

import useWindowSize from "../../custom-hooks/useWindowSize";

const Navbar = function () {
  const { windowSize } = useWindowSize();
  // console.log(windowSize);

  const navLinks = navbarLinks.map((el) => {
    return (
      // Using navbarlinks from constants to create Navbar links
      <NavLink key={el.id} to={el.link} className="navbar--links">
        {el.name}
      </NavLink>
    );
  });
  return (
    <>
      {windowSize <= 700 ? (
        <MobileNav navLinks={navLinks} />
      ) : (
        <div className="navbar">{navLinks}</div>
      )}
    </>
  );
};

export default Navbar;
