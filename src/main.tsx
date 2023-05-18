import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter
      basename={import.meta.env.DEV ? "/" : "/portfolio/"}
    >
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
