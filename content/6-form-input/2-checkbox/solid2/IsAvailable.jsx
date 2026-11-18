import { createSignal } from "solid-js";

export default function IsAvailable() {
  const [isAvailable, setIsAvailable] = createSignal(false);

  function handleChange() {
    setIsAvailable((previousValue) => !previousValue);
  }

  return (
    <>
      <input
        id="is-available"
        type="checkbox"
        checked={isAvailable()}
        onChange={handleChange}
      />
      <label for="is-available">Is available</label>
    </>
  );
}
