import React, { useState, useEffect } from "react";
import Footer from "../../build/Footer";
import GalleryImgModal from "../modals/GalleryImgModal";
import { getImages, IMAGEPERPAGE } from "../../constants/constants";
import "./gallery.css";

const Gallery = function () {
  const images = getImages(); // All Images.

  // CurrentImage
  const [currentImg, setCurrentImg] = useState(null);

  // Modal
  const [modalIsOpen, setModalIsOpen] = useState(null);

  const [imagesPerPage, setImagesPerPage] = useState(9);

  const [imageAttributes, setImageAttributes] = useState(true);

  const handleWindowResize = function (e) {
    const window = e.currentTarget.innerWidth;

    window <= 1200 ? setImagesPerPage(8) : setImagesPerPage(9);
    window <= 505 && setImageAttributes(false);
  };

  // Images per page
  const perPageImages = images.slice(0, imagesPerPage);

  // console.log(windowWidth);
  window.addEventListener("resize", handleWindowResize);

  // Handling Overlay Modal and Current Image to display
  const handleImgClick = function (image) {
    setCurrentImg(image);
    setModalIsOpen(true);
  };

  const imageComponent = perPageImages.map((image, index) => {
    return (
      <div key={index} className="gallery--images">
        <img
          className="gallery_image"
          effect="blur"
          src={image}
          placeholdersrc={image}
          loading="lazy"
          onClick={() => handleImgClick(image)}
        />
      </div>
    );
  });
  return (
    <>
      {modalIsOpen && (
        <GalleryImgModal
          currentImg={currentImg}
          setModalIsOpen={setModalIsOpen}
          imageAttributes={imageAttributes}
        />
      )}
      <div className="gallery">{imageComponent}</div>
      <Footer />
    </>
  );
};

export default Gallery;
