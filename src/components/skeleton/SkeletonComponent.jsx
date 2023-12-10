import React from "react";
import "./skeletonComponent.css";

const SkeletonComponent = function (props) {
  const classes = `skeleton ${props.classes}`;

  return <div className={classes}></div>;
};

export default SkeletonComponent;
