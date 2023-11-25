import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { aboutBioConstant } from "../../../constants/constants";
import bioImage from "../../../assets/aboutImages/bio.webp";

const AboutBio = function () {
  // console.log(aboutBioConstant);
  return (
    <div className="about--bio">
      <LazyLoadImage className="about--bio_img" src={bioImage} />
      <h1 className="about--bio_heading">{aboutBioConstant.title}</h1>
      <p className="about--bio_body">{aboutBioConstant.body}</p>
    </div>
  );
};

export default AboutBio;
