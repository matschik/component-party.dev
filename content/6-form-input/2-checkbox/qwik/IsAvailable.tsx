import { component$, useStore, $ } from "@builder.io/qwik";

const IsAvailable = component$(() => {
  const store = useStore({ isAvailable: false });

  const handleChange = $(() => {
    store.isAvailable = !store.isAvailable;
  });

  return (
    <>
      <input
        id="is-available"
        type="checkbox"
        checked={store.isAvailable}
        onChange$={handleChange}
      />
      <label for="is-available">Is available</label>
    </>
  );
});

export default IsAvailable;
