import React, { useState, useCallback } from "react";

import GalleryImgModal from "../modals/gallery-img-modal/GalleryImgModal";
import GalleryImgEntity from "./gallery-img-entity/GalleryImgEntity";
import GalleryImgsContainer from "./gallery-image-container/GalleryImageContainer";
import GalleryPrevBtn from "./gallery-prev/GalleryPrevBtn";
import GalleryNextBtn from "./gallery-next/GalleryNextBtn";

import useWindowSize from "../../custom-hooks/useWindowSize";
import useApiFetch from "../../custom-hooks/useApiFetch";

import "./gallery.css";

const Gallery = function () {
  const { imagesPerPage, imageAttributes } = useWindowSize();

  const [isPending, setIsPending] = useState(true);

  const { apiImage, slicedApiImage, setSlicedApiImage } = useApiFetch(
    imagesPerPage,
    setIsPending
  );

  // CurrentImage
  const [currentImg, setCurrentImg] = useState(null);

  // Modal
  const [modalIsOpen, setModalIsOpen] = useState(null);

  // Page is the first or the last page
  const [pageStartEnd, setPageStartEnd] = useState("first");

  // Handling images and btn on btn click
  const handlePageChange = useCallback(
    (direction) => {
      const mirrorImage = [...apiImage];
      const startIndex =
        direction === "next" // Next or prev page
          ? slicedApiImage[slicedApiImage.length - 1].key + 1
          : slicedApiImage[0].key - imagesPerPage;

      const currentPageImages = mirrorImage?.splice(startIndex, imagesPerPage);
      setSlicedApiImage(currentPageImages);

      const keys = currentPageImages.map((imageObj) => imageObj.key);

      setPageStartEnd(
        keys.includes(0)
          ? "first"
          : keys.includes(apiImage[apiImage.length - 1].key)
          ? "last"
          : "mid"
      );
    },
    [apiImage, imagesPerPage, setSlicedApiImage, slicedApiImage]
  );

  // Handle Next page
  const handleNextPage = useCallback(() => {
    handlePageChange("next");
  }, [handlePageChange]);

  // Handle Prev Page
  const handlePrevPage = useCallback(() => {
    handlePageChange("prev");
  }, [handlePageChange]);

  // Handling Overlay Modal and Current Image to display
  const handleImgClick = useCallback(
    (imageObj) => {
      setCurrentImg(imageObj);
      setModalIsOpen(true);
    },
    [setCurrentImg, setModalIsOpen]
  );

  const imageComponent = slicedApiImage?.map((imageObj) => {
    return (
      <GalleryImgEntity
        key={imageObj.key}
        imageObj={imageObj}
        handleImgClick={handleImgClick}
        isPending={isPending}
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
          setCurrentImg={setCurrentImg}
          slicedApiImage={slicedApiImage}
        />
      )}

      <GalleryImgsContainer
        imageComponent={imageComponent}
        imagesPerPage={imagesPerPage}
        isPending={isPending}
      />

      <div className="gallery--des--btn">
        <div onClick={handlePrevPage} className="gallery--attrib gallery--next">
          {pageStartEnd === "first" ||
          apiImage?.length < imagesPerPage ||
          !apiImage ? (
            <></>
          ) : (
            <GalleryPrevBtn />
          )}
        </div>
        <div onClick={handleNextPage} className="gallery--attrib gallery--prev">
          {pageStartEnd === "last" ||
          apiImage?.length < imagesPerPage ||
          !apiImage ? (
            <></>
          ) : (
            <GalleryNextBtn />
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
