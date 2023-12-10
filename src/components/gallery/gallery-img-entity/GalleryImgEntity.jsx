import React from "react";

const GalleryImgEntity = React.memo(({ imageObj, handleImgClick }) => {
  return (
    // <div className={`gallery--images ${isPending && "skeleton"}`}>
    <div className="gallery--images">
      <img
        // className={`gallery_image ${isPending && "skeleton"}`}
        className="gallery_image"
        effect="blur"
        src={imageObj.image}
        alt={imageObj.key}
        placeholdersrc={imageObj.image}
        loading="lazy"
        onClick={() => handleImgClick(imageObj)}
      />
      <div
        className="gallery--images_des"
        onClick={() => handleImgClick(imageObj)}
      >
        <h3>{imageObj.date}</h3>
        <p>
          {`${imageObj.description[0].toUpperCase()}${imageObj.description.slice(
            1,
            -1
          )}.`}
        </p>
      </div>
    </div>
  );
});

export default GalleryImgEntity;
