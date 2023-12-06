import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root.js";
import "./app.css";

const updatedRouter = createBrowserRouter([{ path: "*", element: <Root /> }]);

const App = function () {
  return <RouterProvider router={updatedRouter} />;
};

export default App;
