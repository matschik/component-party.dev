import { useState } from "react";
import React from "react";

const colors = [
  { id: 1, text: "red" },
  { id: 2, text: "blue" },
  { id: 3, text: "green" },
  { id: 4, text: "gray", isDisabled: true },
];

export default function ColorSelect() {
  const [color, setColor] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setColor(event.target.value);
  }

  return (
    <div>
      <p>Pick a color:</p>
      <select value={color} onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      {color && <p>You picked: {color}</p>}
    </div>
  );
}
