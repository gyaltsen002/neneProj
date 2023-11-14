import React, { useState } from "react";
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

  const closeModal = function () {
    setModalIsOpen(false);
  };

  const handleLeftArrow = function () {
    console.log("Left clicked.");
  };

  const handleRightArrow = function () {
    console.log("Right clicked.");
  };

  return (
    <>
      <div className="modal" onClick={closeModal}></div>
      <div className="img--modal">
        <LazyLoadImage className="img--modal_src" src={currentImg} />
        {/* <h1>I'm the modal.</h1> */}
        {imageAttributes && (
          <>
            <AiOutlineClose className="modal--close" onClick={closeModal} />
            <AiOutlineArrowLeft
              onClick={handleLeftArrow}
              className="img--modal_arrows img--modal_arrow_left"
            />
            <AiOutlineArrowRight
              onClick={handleRightArrow}
              className="img--modal_arrows img--modal_arrow_right"
            />
          </>
        )}
      </div>
    </>
  );
};

export default GalleryImgModal;
