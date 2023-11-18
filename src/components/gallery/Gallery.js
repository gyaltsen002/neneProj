import React, { useState, useEffect } from "react";
import Footer from "../../build/Footer";
import GalleryImgModal from "../modals/GalleryImgModal";
import { getImages, IMAGEPERPAGE } from "../../constants/constants";
import "./gallery.css";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

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
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // The right, left and cross buttons attributes in modal
  const [imageAttributes, setImageAttributes] = useState(true);

  // Images per page
  const [perPageImages, setPerPageImages] = useState(
    images.slice(0, imagesPerPage)
  );

  // Page is the first or the last page
  const [pageStartEnd, setPageStartEnd] = useState("first");

  // Handling images and btn on btn click
  const handlePageChange = function (direction) {
    const mirrorImage = [...images];
    const startIndex =
      direction === "next" // Next or prev page
        ? perPageImages[perPageImages.length - 1].key + 1
        : perPageImages[0].key - imagesPerPage;

    const currentPageImages = mirrorImage.splice(startIndex, imagesPerPage);
    setPerPageImages(currentPageImages);

    const keys = currentPageImages.map((imageObj) => imageObj.key);

    setPageStartEnd(
      keys.includes(0)
        ? "first"
        : keys.includes(images[images.length - 1].key)
        ? "last"
        : "mid"
    );
  };

  // Handle Next page
  const handleNextPage = function () {
    handlePageChange("next");
  };

  // Handle Prev Page
  const handlePrevPage = function () {
    handlePageChange("prev");
  };

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

    // On <Gallery /> mount/on Re-render
    window.addEventListener("resize", handleResize);

    return () => {
      // On <Gallery /> unmount
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
          start
          setCurrentImg={setCurrentImg}
          perPageImages={perPageImages}
        />
      )}
      <div className="gallery">{imageComponent}</div>
      <div className="gallery--des--btn">
        <div onClick={handlePrevPage} className="gallery--attrib gallery--next">
          {pageStartEnd === "first" ? (
            <></>
          ) : (
            <>
              <span>Prev</span>
              <GrLinkPrevious className="gallery--next_btn" />
            </>
          )}
        </div>
        <div onClick={handleNextPage} className="gallery--attrib gallery--prev">
          {pageStartEnd === "last" ? (
            <></>
          ) : (
            <>
              <span>Next</span>
              <GrLinkNext className="gallery--prev_btn" />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
