import React from "react";

export default function XPSystem({ xp, streak }) {
  const level = Math.floor(xp / 500);
  const progress = (xp % 500) / 5;

  return (
    <div className="bg-white shadow-md p-6 rounded-xl max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-2">Level {level}</h3>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-gray-600">Gesamt-XP: {xp}</p>
      <p className="text-yellow-500 font-semibold mt-2">🔥 Streak: {streak} Tage</p>
    </div>
  );
}
