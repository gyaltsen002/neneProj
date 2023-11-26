import React from "react";

const GalleryImgEntity = function (props) {
  const imageObj = props.imageObj;
  const handleImgClick = props.handleImgClick;

  return (
    <div className="gallery--images">
      <img
        className="gallery_image"
        effect="blur"
        src={imageObj.image}
        alt={imageObj.key}
        placeholdersrc={imageObj.image}
        loading="lazy"
        onClick={() => handleImgClick(imageObj)}
      />
    </div>
  );
};

export default GalleryImgEntity;
