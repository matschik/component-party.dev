import { createSignal } from "solid-js";

export default function Name() {
  const [name, setName] = createSignal("John");
  setName("Jane");

  return <h1>Hello {name()}</h1>;
}
