import { component$, useStore } from "@builder.io/qwik";

export const Name = component$(() => {
  const store = useStore({ name: "John" });
  store.name = "Jane";

  return <h1>Hello {store.name}</h1>;
});
