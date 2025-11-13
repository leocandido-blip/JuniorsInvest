import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import MVPApp from "./mvp/MVPApp.jsx";
import Impressum from "./pages/Impressum.jsx";
import Datenschutz from "./pages/Datenschutz.jsx"; // korrigierter Pfad
import ThankYou from "./pages/ThankYou.jsx";
import FinanceLearn from "./mvp/FinanceLearn.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landingpage */}
        <Route path="/" element={<App />} />

        {/* MVP (Lernapp) */}
        <Route path="/app/*" element={<MVPApp />} />
        <Route path="/learn" element={<FinanceLearn />} />

        {/* Rechtliches */}
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />

        {/* Nach Formularabsendung */}
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Fallback – leitet bei 404 zurück auf Startseite */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
