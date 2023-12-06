import React from "react";

import { AboutBio, AboutCareer, AboutSkills, AboutNene } from "./index";
import "./about.css";

const About = function () {
  return (
    <div className="about">
      <AboutNene />
      <AboutBio />
      <AboutCareer />
      <AboutSkills />
    </div>
  );
};

export default About;
