import { component$, useClientEffect$, useRef } from "@builder.io/qwik";

export const InputFocused = component$(() => {
  const inputElement = useRef(null);

  useClientEffect$(() => inputElement.current.focus());

  return <input type="text" ref={inputElement} />;
});
