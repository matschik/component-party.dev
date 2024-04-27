import { component$, useTask$, useSignal } from "@builder.io/qwik";

export const Name = component$(() => {
  const name = useSignal("John");

  useTask$(() => {
    name.value = "Jane";
  });

  return <h1>Hello {name.value}</h1>;
});
