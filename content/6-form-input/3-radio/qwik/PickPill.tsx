import { component$, useSignal } from "@builder.io/qwik";

const PickPill = component$(() => {
  const pickedColor = useSignal("red");

  return (
    <>
      <div>Picked: {pickedColor.value}</div>
      <input
        id="blue-pill"
        type="radio"
        bind:value={pickedColor}
        checked={pickedColor.value === "blue"}
        value="blue"
      />
      <label for="blue-pill">Blue pill</label>

      <input
        id="red-pill"
        type="radio"
        checked={pickedColor.value === "red"}
        bind:value={pickedColor}
        value="red"
      />
      <label for="red-pill">Red pill</label>
    </>
  );
});

export default PickPill;
