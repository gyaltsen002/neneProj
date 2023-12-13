import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import { ImCross } from "react-icons/im";
import Backdrop from "../../modals/backdrop/Backdrop";

import "./galleryimgmodal.css";

const GalleryImgModal = function (props) {
  const currentImg = props.currentImg;
  const setModalIsOpen = props.setModalIsOpen;
  const setCurrentImg = props.setCurrentImg;
  const slicedApiImage = props.slicedApiImage;

  const closeModal = function () {
    setModalIsOpen(false);
  };

  const handleArrow = function (sign) {
    const currenIndex = currentImg.key;

    // Reading current index of the image
    let changedIndex = currenIndex; // If anyone has a better option feel free to change it if you wish since let is not that much preferred

    // Condition for back
    if (sign === "back") {
      if (currenIndex === slicedApiImage[0].key) {
        changedIndex = slicedApiImage[slicedApiImage.length - 1].key;
      } else {
        changedIndex = currenIndex - 1;
      }
    }

    // Condition for next
    if (sign === "next") {
      if (currenIndex === slicedApiImage[slicedApiImage.length - 1].key) {
        changedIndex = slicedApiImage[0].key;
      } else {
        changedIndex = currenIndex + 1;
      }
    }

    // Updating the current image.
    setCurrentImg(
      slicedApiImage.find((imageObj) => {
        return imageObj.key === changedIndex; // checking index
      })
    );
  };

  return (
    <>
      <Backdrop styleClass="modal" handleModalClose={closeModal} />
      <div className="img--modal">
        <LazyLoadImage className="img--modal_src" src={currentImg.image} />
        <div className="modal--images_des">
          <h3>{currentImg.date}</h3>
          <p>
            {`${currentImg.description[0].toUpperCase()}${currentImg.description.slice(
              1
            )}.`}
          </p>
        </div>
        {/* <h1>I'm the modal.</h1> */}
        <>
          <ImCross className="modal--close" onClick={closeModal} />
          <AiOutlineArrowLeft
            onClick={() => handleArrow("back")}
            className="img--modal_arrows img--modal_arrow_left"
          />
          <AiOutlineArrowRight
            onClick={() => handleArrow("next")}
            className="img--modal_arrows img--modal_arrow_right"
          />
        </>
      </div>
    </>
  );
};

export default GalleryImgModal;
