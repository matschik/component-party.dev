import { useState } from "react";

export default function Name() {
  const [name] = useState<string>("John");

  return <h1>Hello {name}</h1>;
}
