import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import quoteImg from "../../../assets/priceImages/quote.webp";
import { PriceQuoteFormList } from "../index";

const PriceQuote = function () {
  return (
    <div className="price--quote">
      <div className="price--quote_img-container">
        <LazyLoadImage className="price--quote_img" src={quoteImg} />
      </div>
      <PriceQuoteFormList />
    </div>
  );
};

export default PriceQuote;
