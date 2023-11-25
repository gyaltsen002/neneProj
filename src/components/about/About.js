import React from "react";

import { AboutBio, AboutCareer, AboutSkills, AboutNene } from "./index";
import Footer from "../../build/Footer";
import "./about.css";

const About = function () {
  return (
    <>
      <div className="about">
        <AboutNene />
        <AboutBio />
        <AboutCareer />
        <AboutSkills />
      </div>
      <Footer />
    </>
  );
};

export default About;
