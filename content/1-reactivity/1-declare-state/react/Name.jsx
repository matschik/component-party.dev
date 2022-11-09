import { useState } from "react";

export default function Name() {
  const [name] = useState("John");

  return <h1>Hello {name}</h1>;
}
