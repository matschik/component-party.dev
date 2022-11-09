import { createSignal } from "solid-js";

export default function DoubleCount() {
  const [count] = createSignal(10);
  const doubleCount = () => count() * 2;

  return <div>{doubleCount()}</div>;
}
