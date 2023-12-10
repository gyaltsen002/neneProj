import React from "react";
import SkeletonComponent from "../../skeleton/SkeletonComponent";

const GalleryImgsContainer = function (props) {
  const imageComponent = props.imageComponent;
  const isPending = props.isPending;
  const dummyComponent = new Array(props.imagesPerPage)
    .fill(null)
    .map((_, index) => (
      <SkeletonComponent key={index} classes={"gallery--images"} />
    )); //Dummy skeleton components

  return (
    <>
      {isPending ? (
        <div className="gallery">{dummyComponent}</div>
      ) : (
        <div className="gallery">{imageComponent}</div>
      )}
    </>
  );
};

export default GalleryImgsContainer;
