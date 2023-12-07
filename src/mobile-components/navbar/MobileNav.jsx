import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./MobileNav.css";
import Backdrop from "../../components/modals/backdrop/Backdrop";

const MobileNav = function (props) {
  const navLinks = props.navLinks;
  const [hamburgerModal, setHamburgerModal] = useState(false);

  const handleBurgerClick = function () {
    setHamburgerModal(true);
  };

  const handleModalClose = function () {
    setHamburgerModal(false);
  };

  //Copy of Original Navlinks but with closeModal Event listener
  const navLinksWithClick = navLinks.map((link, index) => (
    <NavLink
      key={index} // Make sure to provide a unique key for each NavLink
      to={link.props.to}
      onClick={() => {
        handleModalClose();
      }}
    >
      {link.props.children}
    </NavLink>
  ));

  return (
    <>
      {hamburgerModal && (
        <>
          <Backdrop
            styleClass="modal hamburger--modal"
            handleModalClose={handleModalClose}
          />
          <div className="modal--navlinks">
            <NavLink to="/" onClick={handleModalClose}>
              Home
            </NavLink>
            {navLinksWithClick}
          </div>
        </>
      )}
      <div className="mobile--hamburger" onClick={handleBurgerClick}>
        <div className="mobile--hamburger_el"></div>
        <div className="mobile--hamburger_el"></div>
        <div className="mobile--hamburger_el"></div>
      </div>
    </>
  );
};

export default MobileNav;
