import React, { useState, useEffect } from "react";
import MultipleChoice from "./components/MultipleChoice.jsx";
import Flashcard from "./components/Flashcard.jsx";
import MatchPairs from "./components/MatchPairs.jsx";
import FillBlank from "./components/FillBlank.jsx";

export default function FinanceLearn() {
  const [step, setStep] = useState(
    parseInt(localStorage.getItem("financeStep")) || 0
  );

  const components = [
    <Flashcard
      front="Was ist eine Aktie?"
      back="Eine Aktie ist ein Anteil an einem Unternehmen – du wirst Miteigentümer."
    />,
    <MultipleChoice
      question="Was bedeutet Rendite?"
      options={["Verlust einer Anlage", "Ertrag einer Anlage", "Steuern auf Gewinne"]}
      correct="Ertrag einer Anlage"
    />,
    <MatchPairs
      pairs={{
        Aktie: "Unternehmensanteil",
        Anleihe: "Kredit an den Staat oder ein Unternehmen",
        ETF: "Bündel von Aktien",
      }}
    />,
    <FillBlank
      sentence="Eine Aktie ist ein ____ an einem Unternehmen."
      answer="Anteil"
    />,
  ];

  const nextStep = () => {
    if (step < components.length - 1) {
      const newStep = step + 1;
      setStep(newStep);
      localStorage.setItem("financeStep", newStep);
    } else {
      alert("🎉 Glückwunsch! Du hast das Lernmodul abgeschlossen!");
      localStorage.removeItem("financeStep");
      setStep(0);
    }
  };

  const progress = ((step + 1) / components.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Finance Basics</h1>
      <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-md text-center">
        {components[step]}
        <div className="mt-6 w-full bg-gray-200 h-2 rounded-full">
          <div
            className="h-2 bg-blue-600 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <button
          onClick={nextStep}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Weiter
        </button>
      </div>
    </div>
  );
}
