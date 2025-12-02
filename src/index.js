import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Note: 'react-dom/client'
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Get the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
