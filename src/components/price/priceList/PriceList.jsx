import React from "react";

import priceFirst from "../../../assets/priceImages/price1.webp";
import priceSecond from "../../../assets/priceImages/price2.webp";
import priceThird from "../../../assets/priceImages/price3.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PriceList = function () {
  return (
    <div className="price--list">
      <div className="price--list_heading">
        <h1>Price List</h1>
      </div>
      <div className="price--list_images">
        <LazyLoadImage className="price--list_image" src={priceFirst} />
        <LazyLoadImage className="price--list_image" src={priceSecond} />
        <LazyLoadImage className="price--list_image" src={priceThird} />
      </div>
    </div>
  );
};

export default PriceList;
