import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">JuniorsInvest</h1>
      <div className="flex gap-6">
        <Link to="/app" className="hover:text-blue-200">Home</Link>
        <Link to="/app/leaderboard" className="hover:text-blue-200">Ranking</Link>
        <Link to="/app/profile" className="hover:text-blue-200">Profil</Link>
      </div>
    </nav>
  );
}
