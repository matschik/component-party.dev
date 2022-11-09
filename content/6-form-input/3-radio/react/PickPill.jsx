import { useState } from "react";

export default function PickPill() {
  const [picked, setPicked] = useState("red");

  function handleChange(event) {
    setPicked(event.target.value);
  }

  return (
    <>
      <div>Picked: {picked}</div>

      <input
        id="blue-pill"
        checked={picked === "blue"}
        type="radio"
        value="blue"
        onChange={handleChange}
      />
      <label htmlFor="blue-pill">Blue pill</label>

      <input
        id="red-pill"
        checked={picked === "red"}
        type="radio"
        value="red"
        onChange={handleChange}
      />
      <label htmlFor="red-pill">Red pill</label>
    </>
  );
}
