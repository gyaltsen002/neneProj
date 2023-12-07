import React from "react";

const Backdrop = function (props) {
  const classStyle = props.styleClass;
  const handleModalClose = props.handleModalClose;
  return <div onClick={handleModalClose} className={classStyle}></div>;
};

export default Backdrop;
