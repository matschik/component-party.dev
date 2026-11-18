import { createSignal } from "solid-js";

export default function Name() {
  const [name] = createSignal("John");

  return <h1>Hello {name()}</h1>;
}
