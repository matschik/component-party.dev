import { component$, useSignal, useComputed$ } from "@builder.io/qwik";

export const DoubleCount = component$(() => {
  const count = useSignal(10);
  const doubleCount = useComputed$(() => count.value * 2);

  return <div>{doubleCount.value}</div>;
});
