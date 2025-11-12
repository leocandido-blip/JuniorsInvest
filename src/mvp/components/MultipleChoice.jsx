import React from "react";

export default function MultipleChoice({ question, options, onAnswer }) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold">{question}</h3>
      <ul className="mt-2">
        {options.map((opt, i) => (
          <li key={i}>
            <button
              onClick={() => onAnswer(opt)}
              className="w-full text-left px-3 py-2 border rounded mt-1 hover:bg-gray-100"
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
