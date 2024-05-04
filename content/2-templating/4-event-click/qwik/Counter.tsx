import { component$, useSignal, $ } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(0);

  const incrementCount = $(() => {
    count.value++;
  });

  return (
    <>
      <p>Counter: {count.value}</p>
      <button onClick$={incrementCount}>Increment</button>
    </>
  );
});
