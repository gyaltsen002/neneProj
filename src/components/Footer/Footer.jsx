import React from "react";

import nene from "../../assets/proto/footer.webp";
import ne from "../../assets/proto/logo.webp";
import "./footer.css";

const Footer = function () {
  return (
    <div className="footer">
      <div className="footer-logos">
        <img alt="Nene_Logo" className="footer--logo" src={nene} />
        <img alt="Footer_logo" className="footer--logo" src={ne} />
      </div>
      <p>Unauthorized copying prohibited.</p>
      <a
        className="footer--link"
        rel="noreferrer noopener"
        href="google.com"
        target="_blank"
      >
        &copy;2023 by Nene Hair & Make up artistry
      </a>
    </div>
  );
};

export default Footer;
