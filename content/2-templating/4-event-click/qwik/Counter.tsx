import { component$, useStore } from "@builder.io/qwik";

export const Counter = component$(() => {
  const store = useStore({ count: 0 });
  
  const incrementCount = $(() => {
    store.count++;
  });

  return (
    <>
      <p>Counter: {store.count}</p>
      <button onClick$={incrementCount}>Increment</button>
    </>
  );
});
