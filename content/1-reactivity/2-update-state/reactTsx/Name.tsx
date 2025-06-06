import { useState } from "react";

export default function Name() {
  const [name, setName] = useState<string>("John");

  function changeName() {
    setName("Doe");
  }

  return <h1 onClick={changeName}>Hello {name}</h1>;
}
