import { useState } from "react";
import React from "react";

export default function InputHello() {
  const [name, setName] = useState<string>("John");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <p>Hello, {name}!</p>
    </div>
  );
}
