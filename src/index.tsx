import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App";
import { AboutMe } from "./pages/About";
import { Default, DoesNotExist } from "./pages/Defaults";

import "./styles/base.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/default" element={<Default />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<DoesNotExist />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
