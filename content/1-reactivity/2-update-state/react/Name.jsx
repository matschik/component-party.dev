import { useEffect, useState } from "react";

export default function Name() {
  const [name, setName] = useState("John");

  useEffect(() => {
    setName("Jane");
  }, []);

  return <h1>Hello {name}</h1>;
}
