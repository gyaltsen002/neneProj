import React from "react";

import { PriceList, PriceQuote } from "./index";
import "./price.css";

const Price = function () {
  return (
    <div className="price">
      <PriceList />
      <PriceQuote />
    </div>
  );
};

export default Price;
