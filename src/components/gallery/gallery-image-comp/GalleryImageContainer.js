import React from "react";

const GalleryImgsComponent = function (props) {
  const imageComponent = props.imageComponent;

  return <div className="gallery">{imageComponent}</div>;
};

export default GalleryImgsComponent;
