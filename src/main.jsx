import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "nes.css/css/nes.min.css";
import ThemeProvider from "./context/Notes/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
