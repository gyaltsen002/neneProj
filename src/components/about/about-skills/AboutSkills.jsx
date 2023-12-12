import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

import exp1 from "../../../assets/aboutImages/exp1.webp";
import exp2 from "../../../assets/aboutImages/exp2.webp";
import { aboutSkillsConstant, scrollToTop } from "../../../assets/constants";

const AboutSkills = function () {
  return (
    <div className="about--skills">
      <div className="about--skills__firstImg">
        <LazyLoadImage src={exp1} />
        <h2>{aboutSkillsConstant.title}</h2>
        <p>{aboutSkillsConstant.date}</p>
      </div>
      <div className="about--skills__content">
        <p>{aboutSkillsConstant.skill}</p>
        <NavLink to="/gallery" onClick={scrollToTop}>
          See Gallery
        </NavLink>
      </div>
      <div className="about--skills__secondImg">
        <LazyLoadImage src={exp2} />
      </div>
    </div>
  );
};

export default AboutSkills;
