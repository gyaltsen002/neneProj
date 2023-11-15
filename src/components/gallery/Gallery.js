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

  // Images per page
  const [imagesPerPage, setImagesPerPage] = useState(
    window.innerWidth >= 700 && window.innerWidth <= 1200 ? 8 : 9
  );

  // Window Size
  const [windowSize, setWindowSize] = useState(1200);

  // The right, left and cross buttons attributes in modal
  const [imageAttributes, setImageAttributes] = useState(true);

  // Images per page
  const perPageImages = images.slice(0, imagesPerPage);

  // Handling Overlay Modal and Current Image to display
  const handleImgClick = function (imageObj) {
    setCurrentImg(imageObj);
    // console.log(imageObj);
    setModalIsOpen(true);
  };

  useEffect(() => {
    const handleResize = function (e) {
      const changedWindowSize = e.target.innerWidth;

      setWindowSize(changedWindowSize);

      windowSize >= 700 && windowSize <= 1200
        ? setImagesPerPage(8)
        : setImagesPerPage(9);

      if (windowSize <= 705) {
        setImageAttributes(false);
      } else {
        setImageAttributes(true);
      }
    };

    // On mount/on Re-render
    window.addEventListener("resize", handleResize);

    return () => {
      // On unmount
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  const imageComponent = perPageImages.map((imageObj) => {
    return (
      <div key={imageObj.key} className="gallery--images">
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
  });
  return (
    <>
      {modalIsOpen && (
        <GalleryImgModal
          currentImg={currentImg}
          setModalIsOpen={setModalIsOpen}
          imageAttributes={imageAttributes}
          setCurrentImg={setCurrentImg}
          perPageImages={perPageImages}
        />
      )}
      <div className="gallery">{imageComponent}</div>
      <Footer />
    </>
  );
};

export default Gallery;
