import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // certifique-se do caminho

import "./css/index.css"; // seu CSS global

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
