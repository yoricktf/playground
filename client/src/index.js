import React from "react";
import createRoot from "react-dom";
import axios from 'axios'
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = 'http://localhost:5005';
// axios.defaults.baseURL = 'https://APP-NAME-HERE.herokuapp.com';

createRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
