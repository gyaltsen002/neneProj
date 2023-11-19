import React from "react";

const GalleryImgsContainer = function (props) {
  const imageComponent = props.imageComponent;

  return <div className="gallery">{imageComponent}</div>;
};

export default GalleryImgsContainer;
