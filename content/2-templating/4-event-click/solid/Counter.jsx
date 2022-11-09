import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  function incrementCount() {
    setCount(count() + 1);
  }

  return (
    <>
      <p>Counter: {count()}</p>
      <button onClick={incrementCount}>+1</button>
    </>
  );
}
