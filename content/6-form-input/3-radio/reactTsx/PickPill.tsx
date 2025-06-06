import { useState } from "react";
import React from "react";

export default function PickPill() {
  const [picked, setPicked] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPicked(event.target.value);
  }

  return (
    <div>
      <p>Which pill will you take?</p>
      <label>
        <input
          type="radio"
          value="red"
          checked={picked === "red"}
          onChange={handleChange}
        />
        Red
      </label>
      <label>
        <input
          type="radio"
          value="blue"
          checked={picked === "blue"}
          onChange={handleChange}
        />
        Blue
      </label>
      {picked && <p>You picked the {picked} pill.</p>}
    </div>
  );
}
