import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "jquery/dist/jquery.slim"
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import APP from "./components/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <APP />
  </BrowserRouter>
);
