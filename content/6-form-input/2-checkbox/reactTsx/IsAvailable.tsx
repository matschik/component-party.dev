import { useState } from "react";
import React from "react";

export default function IsAvailable() {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIsAvailable(event.target.checked);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={isAvailable} onChange={handleChange} />
        Is available
      </label>
      <p>Available: {isAvailable ? "Yes" : "No"}</p>
    </div>
  );
}
