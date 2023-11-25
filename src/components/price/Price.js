import React from "react";
import Footer from "../../build/Footer";

import { PriceList, PriceQuote } from "./index";
import "./price.css";

const Price = function () {
  return (
    <>
      <div className="price">
        <PriceList />
        <PriceQuote />
      </div>
      <Footer />
    </>
  );
};

export default Price;
