import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./Layout.jsx";
import { Main, About, Contact, Price, Gallery } from "./components/index.js";
import Root from "./Root.js";
import "./app.css";

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
  return <RouterProvider router={updatedRouter} element={<Layout />} />;
};

export default App;
