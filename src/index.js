import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "jquery/dist/jquery.slim";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import APP from "./components/app";
import { Provider } from "react-redux";
import store from "./components/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <APP />
    </BrowserRouter>
  </Provider>
);
