import React from "react";

export default function Profile() {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-3">👤 Mein Profil</h2>
      <p className="text-gray-700 mb-1">Benutzername: <strong>LeoCandido</strong></p>
      <p className="text-gray-700 mb-1">Level: 3</p>
      <p className="text-gray-700 mb-4">Gesamt-XP: 1200</p>
      <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
        Fortschritt teilen 🚀
      </button>
    </div>
  );
}
