import { component$, useSignal } from "@builder.io/qwik";

export const Name = component$(() => {
  const name = useSignal("John");

  return <h1>Hello {name.value}</h1>;
});
