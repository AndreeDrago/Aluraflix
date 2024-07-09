//*React
import React from "react";
import ReactDOM from "react-dom/client";

//*Style
import "./components/Style/Reset.css";
import "./index.css";

//*Rutes
import AppRoutes from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
