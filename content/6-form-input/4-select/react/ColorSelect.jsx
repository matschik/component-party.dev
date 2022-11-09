import { useState } from "react";

const colors = [
  { id: 1, text: "red" },
  { id: 2, text: "blue" },
  { id: 3, text: "green" },
  { id: 4, text: "gray", isDisabled: true },
];

export default function ColorSelect() {
  const [selectedColorId, setSelectedColorId] = useState(2);

  function handleChange(event) {
    setSelectedColorId(event.target.value);
  }

  return (
    <select value={selectedColorId} onChange={handleChange}>
      {colors.map((color) => (
        <option key={color.id} value={color.id} disabled={color.isDisabled}>
          {color.text}
        </option>
      ))}
    </select>
  );
}
