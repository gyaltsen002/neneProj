import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import nene1 from "../../../assets/aboutImages/nene1.webp";
import nene2 from "../../../assets/aboutImages/nene2.webp";
import nene3 from "../../../assets/aboutImages/nene3.webp";

const AboutNene = function () {
  const bioNeneImages = [nene1, nene2, nene3];
  return (
    <div className="about--nene">
      {bioNeneImages.map((img, index) => {
        return (
          <LazyLoadImage className="about--nene_imgs" key={index} src={img} />
        );
      })}
      <h1 className="about--nene_heading">About Nene</h1>
    </div>
  );
};

export default AboutNene;
