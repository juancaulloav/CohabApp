import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import { CohabApp } from "./CohabApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CohabApp />
    </BrowserRouter>
  </React.StrictMode>
);
