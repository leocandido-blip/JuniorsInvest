import React, { useState } from "react";

export default function Flashcard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer p-4 border rounded-lg text-center"
    >
      {flipped ? back : front}
    </div>
  );
}
