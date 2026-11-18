import { createSignal } from "solid-js";

export default function PickPill() {
  const [picked, setPicked] = createSignal("red");

  function handleChange(event) {
    setPicked(event.target.value);
  }

  return (
    <>
      <div>Picked: {picked()}</div>
      <input
        id="blue-pill"
        checked={picked() === "blue"}
        type="radio"
        value="blue"
        onChange={handleChange}
      />
      <label for="blue-pill">Blue pill</label>

      <input
        id="red-pill"
        checked={picked() === "red"}
        type="radio"
        value="red"
        onChange={handleChange}
      />
      <label for="red-pill">Red pill</label>
    </>
  );
}
