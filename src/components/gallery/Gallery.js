import React, { useState, useEffect } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import Footer from "../../build/Footer";
import { GalleryImgModal, Loading, Error } from "../index";
import {
  getImages,
  WINDOWWIDTH,
  IMAGESPERPAGE,
} from "../../constants/constants";
import "./gallery.css";

const Gallery = function () {
  // All the images using useEffect
  const [images, setImages] = useState([]);

  // Error checking
  const [error, setError] = useState(false);

  // Loading
  const [loading, setLoading] = useState(true);

  // CurrentImage
  const [currentImg, setCurrentImg] = useState(null);

  // Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Images per page
  const [imagesPerPage, setImagesPerPage] = useState(IMAGESPERPAGE);

  // Window Size
  const [windowSize, setWindowSize] = useState(WINDOWWIDTH);

  // The right, left and cross buttons attributes in modal
  const [imageAttributes, setImageAttributes] = useState(true);
  // Images per page
  const [slicedImagesPage, setSlicedImagesPage] = useState([]);

  // Page is the first or the last page
  const [pageStartEnd, setPageStartEnd] = useState("first");

  useEffect(() => {
    const getImagesGallery = async function () {
      try {
        const images = await getImages();
        setImages(images);
        setLoading(false);
        setSlicedImagesPage(images.slice(0, imagesPerPage));

        // console.log(images.length);
        if (images.length === 0) throw new Error("No data");
      } catch (e) {
        setError(true);
      }
    };
    getImagesGallery();
  }, []);

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
      <div key={imageObj.key} className="gallery--images">
        {loading ? (
          <Loading />
        ) : (
          <img
            className="gallery_image"
            effect="blur"
            src={imageObj.image}
            // placeholderSrc={imageObj.image}
            // loading="lazy"
            onClick={() => handleImgClick(imageObj)}
          />
        )}
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
          slicedImagesPage={slicedImagesPage}
        />
      )}
      {error ? (
        <Error />
      ) : (
        <>
          <div className="gallery">{imageComponent}</div>
          <div className="gallery--des--btn">
            <div
              onClick={handlePrevPage}
              className="gallery--attrib gallery--next"
            >
              {pageStartEnd === "first" ? (
                <></>
              ) : (
                <>
                  <span>Prev</span>
                  <GrLinkPrevious className="gallery--next_btn" />
                </>
              )}
            </div>
            <div
              onClick={handleNextPage}
              className="gallery--attrib gallery--prev"
            >
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
        </>
      )}
      <Footer />
    </>
  );
};

export default Gallery;
