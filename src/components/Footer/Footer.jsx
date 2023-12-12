import React from "react";
import { Link } from "react-router-dom";

import nene from "../../assets/proto/footer.webp";
import ne from "../../assets/proto/logo.webp";
import { scrollToTop } from "../../assets/constants";
import "./footer.css";

const Footer = function () {
  return (
    <div className="footer">
      <div className="footer-logos">
        <img alt="Nene_Logo" className="footer--logo" src={nene} />
        <img alt="Footer_logo" className="footer--logo" src={ne} />
      </div>
      <p>Unauthorized copying prohibited.</p>
      <Link className="footer--link" to="/" onClick={scrollToTop}>
        &copy;2023 by Nene Hair & Make up artistry
      </Link>
    </div>
  );
};

export default Footer;
