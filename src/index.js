import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="max-w-screen-2xl mx-auto md:py-12 py-4 md:px-12 px-4  min-h-screen">
      <App />
    </div>
  </React.StrictMode>
);
