import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx"; // Landingpage
import MVPApp from "./mvp/MVPApp.jsx"; // Zukünftige Haupt-App
import FinanceLearn from "./mvp/FinanceLearn.jsx"; // Learning-MVP

// Rechtliche Seiten
import Impressum from "./pages/Impressum.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import ThankYou from "./pages/ThankYou.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landingpage */}
        <Route path="/" element={<App />} />

        {/* MVP-Haupt-App (später) */}
        <Route path="/app/*" element={<MVPApp />} />

        {/* Finance Learning MVP */}
        <Route path="/learn" element={<FinanceLearn />} />

        {/* Rechtliches */}
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />

        {/* Newsletter-Danke-Seite */}
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
