import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Main } from "./components/index.js";
import { About, Contact, Gallery, Price } from "./components/index.js";
import "./app.css";

const App = function () {
  return (
    <BrowserRouter>
      <div className="main-root">
        <Header />
        <Routes>
          <Route exact path={"/"} element={<Main />} />
          <Route path={"gallery"} element={<Gallery />} />
          <Route path={"about"} element={<About />} />
          <Route path={"price"} element={<Price />} />
          <Route path={"contact"} element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
