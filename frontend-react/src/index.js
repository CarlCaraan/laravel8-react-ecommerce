import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/custom.css";
import "../src/assets/css/fontawesome.css";
import "../src/assets/css/animate.min.css";
import "../src/assets/css/placeholder-loading.min.css";
import axios from "axios";

// Add a request interceptor for AXIOS AUTHENTICATION
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = "Bearer " + localStorage.getItem("token");
  return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  //  </React.StrictMode>
);

reportWebVitals();
