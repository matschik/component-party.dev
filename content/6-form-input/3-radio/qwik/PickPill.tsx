import { component$, useStore, $ } from "@builder.io/qwik";

const PickPill = component$(() => {
  const store = useStore({ picked: "red" });

  const handleChange = $((event: Event) => {
    store.picked = (event.target as HTMLInputElement).value;
  });

  return (
    <>
      <div>Picked: {store.picked}</div>
      <input
        id="blue-pill"
        checked={store.picked === "blue"}
        type="radio"
        value="blue"
        onChange$={handleChange}
      />
      <label for="blue-pill">Blue pill</label>

      <input
        id="red-pill"
        checked={store.picked === "red"}
        type="radio"
        value="red"
        onChange$={handleChange}
      />
      <label for="red-pill">Red pill</label>
    </>
  );
});

export default PickPill;
