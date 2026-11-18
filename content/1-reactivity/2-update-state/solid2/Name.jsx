import { createSignal, onSettled } from "solid-js";

export default function Name() {
  const [name, setName] = createSignal("John");

  onSettled(() => {
    setName("Jane");
  });

  return <h1>Hello {name()}</h1>;
}
