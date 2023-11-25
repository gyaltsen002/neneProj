import React from "react";

import errorImg from "../../../assets/formSubmitImgs/error.png";
import successImg from "../../../assets/formSubmitImgs/success.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SubmitMessage = function (props) {
  const message = props.message;
  return (
    <>
      <div className="submit--modal"></div>
      <div className="modal--message">
        {message === "success" ? (
          <LazyLoadImage src={successImg} />
        ) : (
          <LazyLoadImage src={errorImg} />
        )}
        <h1>{message}</h1>
      </div>
    </>
  );
};

export default SubmitMessage;
