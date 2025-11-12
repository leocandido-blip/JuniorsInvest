// src/mvp/components/FillBlank.jsx
import React, { useState } from "react";

const FillBlank = ({ question, answer, onAnswer }) => {
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim().toLowerCase() === answer.toLowerCase()) {
      setFeedback("✅ Richtig!");
      onAnswer(true);
    } else {
      setFeedback("❌ Falsch, versuch’s nochmal!");
      onAnswer(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md text-center">
      <h3 className="text-lg font-semibold mb-3">{question}</h3>
      <form onSubmit={handleSubmit} className="space-x-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Antwort eingeben"
          className="border border-gray-300 rounded-lg px-3 py-1"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition"
        >
          Prüfen
        </button>
      </form>
      {feedback && <p className="mt-2 text-sm">{feedback}</p>}
    </div>
  );
};

export default FillBlank;
