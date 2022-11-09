import { component$, useStore } from "@builder.io/qwik";

export const DoubleCount = component$(() => {
  const store = useStore({ count: 10 });
  const doubleCount = store.count * 2;

  return <div>{doubleCount}</div>;
});
