import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Maintanence from "./Components/Maintanence";
import Introduction from "./Components/Introduction";
import TestThree from "./Components/TestThree";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Introduction />} />
        <Route path="about" element={<Maintanence />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
