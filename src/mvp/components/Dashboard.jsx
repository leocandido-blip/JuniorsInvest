import React, { useState } from "react";
import XPSystem from "./XPSystem.jsx";

export default function Dashboard() {
  const [xp, setXp] = useState(1200);
  const [streak, setStreak] = useState(5);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Lerne & wachse!</h2>
      <p className="text-gray-700 mb-6">
        Deine tägliche Lernroutine bringt dich dem finanziellen Erfolg näher 💪
      </p>

      <XPSystem xp={xp} streak={streak} />

      <button
        onClick={() => setXp((prev) => prev + 20)}
        className="bg-green-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-green-600 transition"
      >
        +20 XP verdienen (Quiz abschließen)
      </button>
    </div>
  );
}
