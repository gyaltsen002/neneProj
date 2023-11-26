import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GalleryImgEntity = function (props) {
  const imageObj = props.imageObj;
  const handleImgClick = props.handleImgClick;
  const loading = props.loading;

  console.log(loading);

  return (
    <div className="gallery--images">
      <img
        className="gallery_image"
        effect="blur"
        src={imageObj.image}
        placeholdersrc={imageObj.image}
        loading="lazy"
        onClick={() => handleImgClick(imageObj)}
      />
    </div>
  );
};

export default GalleryImgEntity;
