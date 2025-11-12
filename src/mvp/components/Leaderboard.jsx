import React from "react";
import { leaderboard } from "../data/leaderboardData.js";

export default function Leaderboard() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">🏆 Ranking</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3 text-right">XP</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={user.id} className="border-b hover:bg-gray-100">
              <td className="p-3 font-bold">{index + 1}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3 text-right">{user.xp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
