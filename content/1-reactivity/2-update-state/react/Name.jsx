import { useState } from "react";

export default function Name() {
  const [name, setName] = useState("John");
  setName("Jane");

  return <h1>Hello {name}</h1>;
}
