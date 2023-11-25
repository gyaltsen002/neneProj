import React, { useState, useEffect } from "react";

import Footer from "../../build/Footer";
import GalleryImgsComponent from "./gallery-image-container/GalleryImageContainer";
import GalleryImgModal from "../modals/gallery-img-modal/GalleryImgModal";
import GalleryImgEntity from "./gallery-img-entity/GalleryImgEntity";
import GalleryNextBtn from "./gallery-next/GalleryNextBtn";
import GalleryPrevBtn from "./gallery-prev/GalleryPrevBtn";
import { getImages, INITIALWINDOWWIDTH } from "../../constants/constants";
import "./gallery.css";

const Gallery = function () {
  const images = getImages(); // All Images.
  // CurrentImage
  const [currentImg, setCurrentImg] = useState(null);

  // Modal
  const [modalIsOpen, setModalIsOpen] = useState(null);

  // Images per page
  const [imagesPerPage, setImagesPerPage] = useState(
    INITIALWINDOWWIDTH >= 700 && INITIALWINDOWWIDTH <= 1200 ? 8 : 9
  );

  // Window Size
  const [windowSize, setWindowSize] = useState(INITIALWINDOWWIDTH);

  // The right, left and cross buttons attributes in modal
  const [imageAttributes, setImageAttributes] = useState(true);

  // Images per page
  const [slicedImagesPage, setSlicedImagesPage] = useState(
    images.slice(0, imagesPerPage)
  );

  // Page is the first or the last page
  const [pageStartEnd, setPageStartEnd] = useState("first");

  // Handling images and btn on btn click
  const handlePageChange = function (direction) {
    const mirrorImage = [...images];
    const startIndex =
      direction === "next" // Next or prev page
        ? slicedImagesPage[slicedImagesPage.length - 1].key + 1
        : slicedImagesPage[0].key - imagesPerPage;

    const currentPageImages = mirrorImage.splice(startIndex, imagesPerPage);
    setSlicedImagesPage(currentPageImages);

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

  const imageComponent = slicedImagesPage.map((imageObj) => {
    return (
      <GalleryImgEntity
        key={imageObj.key}
        imageObj={imageObj}
        handleImgClick={handleImgClick}
      />
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
          slicedImagesPage={slicedImagesPage}
        />
      )}

      <GalleryImgsComponent imageComponent={imageComponent} />

      <div className="gallery--des--btn">
        <div onClick={handlePrevPage} className="gallery--attrib gallery--next">
          {pageStartEnd === "first" ? <></> : <GalleryPrevBtn />}
        </div>
        <div onClick={handleNextPage} className="gallery--attrib gallery--prev">
          {pageStartEnd === "last" ? <></> : <GalleryNextBtn />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
