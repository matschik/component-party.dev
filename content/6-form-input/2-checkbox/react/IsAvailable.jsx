import { useState } from "react";

export default function IsAvailable() {
  const [isAvailable, setIsAvailable] = useState(false);

  function handleChange() {
    setIsAvailable(!isAvailable);
  }

  return (
    <>
      <input
        id="is-available"
        type="checkbox"
        checked={isAvailable}
        onChange={handleChange}
      />
      <label htmlFor="is-available">Is available</label>
    </>
  );
}
