import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./Layout.jsx";
import { Header } from "./components/index.js";
import { Main, About, Contact, Price, Gallery } from "./components/index.js";
import Root from "./Root.js";
import "./app.css";

const updatedRouter = createBrowserRouter([
  {
    path: "/",
    Component: Main,
  },
  {
    path: "gallery",
    Component: Gallery,
  },
  {
    path: "about",
    Component: About,
  },
  {
    path: "price",
    Component: Price,
  },
  {
    path: "contact",
    Component: Contact,
  },
  {
    path: "*",
    Component: Root,
  },
]);

const App = function () {
  return (
    <>
      <RouterProvider router={updatedRouter} element={<Layout />} />;
    </>
  );
};

export default App;
