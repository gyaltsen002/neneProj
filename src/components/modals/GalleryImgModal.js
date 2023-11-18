import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  AiOutlineClose,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";

import "./galleryimgmodal.css";

const GalleryImgModal = function (props) {
  const currentImg = props.currentImg;
  const setModalIsOpen = props.setModalIsOpen;
  const imageAttributes = props.imageAttributes;
  const setCurrentImg = props.setCurrentImg;
  const perPageImages = props.perPageImages;

  const closeModal = function () {
    setModalIsOpen(false);
  };

  const handleArrow = function (sign) {
    const currenIndex = currentImg.key;

    // Reading current index of the image
    let changedIndex = currenIndex; // If anyone has a better option feel free to change it if you wish since let is not that much preferred

    // Condition for back
    if (sign === "back") {
      if (currenIndex === 0) {
        changedIndex = perPageImages.length - 1;
      } else {
        changedIndex = currenIndex - 1;
      }
    }

    // Condition for next
    if (sign === "next") {
      if (currenIndex === perPageImages.length - 1) {
        changedIndex = 0;
      } else {
        changedIndex = currenIndex + 1;
      }
    }

    // Updating the current image.
    setCurrentImg(
      perPageImages.find((imageObj) => {
        return imageObj.key === changedIndex; // checking index
      })
    );
  };

  return (
    <>
      <div className="modal" onClick={closeModal}></div>
      <div className="img--modal">
        <LazyLoadImage className="img--modal_src" src={currentImg.image} />
        {/* <h1>I'm the modal.</h1> */}
        {imageAttributes && (
          <>
            <AiOutlineClose className="modal--close" onClick={closeModal} />
            <AiOutlineArrowLeft
              onClick={() => handleArrow("back")}
              className="img--modal_arrows img--modal_arrow_left"
            />
            <AiOutlineArrowRight
              onClick={() => handleArrow("next")}
              className="img--modal_arrows img--modal_arrow_right"
            />
          </>
        )}
      </div>
    </>
  );
};

export default GalleryImgModal;
