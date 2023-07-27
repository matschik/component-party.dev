import { component$, useClientEffect$, useRef } from "@builder.io/qwik";

export const InputIndeterminate = component$(() => {
  const inputElement = useRef(null);

  useClientEffect$(() => inputElement.current.indeterminate = true);

  return <input type="checkbox" ref={inputElement} />;
});
