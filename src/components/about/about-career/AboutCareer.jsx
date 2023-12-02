import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { aboutCareerConstant } from "../../../assets/constants";
import careerImg from "../../../assets/aboutImages/career.webp";

const AboutCareer = function () {
  const { title, body } = aboutCareerConstant;

  const careers = body.map((experience) => {
    return (
      <div key={experience.id} className="about--career_exp_elms">
        <p>{experience.experience}</p>
        <h2>{experience.date}</h2>
      </div>
    );
  });

  return (
    <div className="about--career">
      <LazyLoadImage className="about--career_img" src={careerImg} />
      <div className="about--career_des">
        <div className="about--career_des_headings">
          <h1>{title}</h1>
          <p>Proffesional Experience</p>
        </div>
        <div className="about--career_exp">{careers}</div>
      </div>
    </div>
  );
};

export default AboutCareer;
