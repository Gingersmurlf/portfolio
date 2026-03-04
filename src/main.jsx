import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.jsx";
import Kontakt from "./components/kontakt.jsx";
import Projekter from "./components/projekter.jsx";
import NotFound from "./components/notfound.jsx";

import "./scss/style.scss";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="projekter" element={<Projekter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
