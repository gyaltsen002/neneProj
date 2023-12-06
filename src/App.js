import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root.js";
import "./app.css";
import { About, Contact, Gallery, Main, Price } from "./components/index.js";

const updatedRouter = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Main,
      },
      {
        path: "gallery",
        Component: Gallery,
      },
      {
        path: "price",
        Component: Price,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);

const App = function () {
  return <RouterProvider router={updatedRouter} />;
};

export default App;
