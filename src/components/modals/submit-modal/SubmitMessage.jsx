import React from "react";

import errorImg from "../../../assets/formSubmitImgs/error.png";
import successImg from "../../../assets/formSubmitImgs/success.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Backdrop from "../backdrop/Backdrop";

const SubmitMessage = function (props) {
  // const message = props.message;
  const message = props.message;

  return (
    <>
      <Backdrop styleClass="submit--modal" />
      <div className="modal--message">
        {message === "success" && (
          <>
            <LazyLoadImage src={successImg} />
            <h1 className="modal--message_heading">{message}</h1>
          </>
        )}
        {message === "error" && (
          <>
            <LazyLoadImage src={errorImg} />
            <h1 className="modal--message_heading">
              Please provide all the details :).
            </h1>
          </>
        )}
      </div>
    </>
  );
};

export default SubmitMessage;
