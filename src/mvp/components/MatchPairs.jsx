import React, { useState } from "react";

export default function MatchPairs({ pairs }) {
  const [selected, setSelected] = useState(null);
  const [matched, setMatched] = useState([]);

  const handleSelect = (side, item) => {
    if (!selected) setSelected({ side, item });
    else if (selected.side !== side) {
      if (pairs.some(p => p.left === selected.item && p.right === item)) {
        setMatched([...matched, selected.item]);
      }
      setSelected(null);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4 border rounded-lg">
      <div>
        {pairs.map((p, i) => (
          <button
            key={i}
            onClick={() => handleSelect("left", p.left)}
            className={`block w-full text-left px-3 py-2 border rounded mb-2 ${
              matched.includes(p.left) ? "bg-green-100" : ""
            }`}
          >
            {p.left}
          </button>
        ))}
      </div>
      <div>
        {pairs.map((p, i) => (
          <button
            key={i}
            onClick={() => handleSelect("right", p.right)}
            className="block w-full text-left px-3 py-2 border rounded mb-2"
          >
            {p.right}
          </button>
        ))}
      </div>
    </div>
  );
}
