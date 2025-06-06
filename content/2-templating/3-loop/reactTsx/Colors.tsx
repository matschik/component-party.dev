import { useState } from "react";

export default function Colors() {
  const [colors] = useState<string[]>(["red", "green", "blue"]);

  return (
    <ul>
      {colors.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  );
}
