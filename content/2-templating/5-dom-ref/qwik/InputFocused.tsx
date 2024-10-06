import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";

export const InputFocused = component$(() => {
  const inputElement = useSignal<HTMLInputElement>();

  useVisibleTask$(({ track }) => {
    const el = track(inputElement);
    el?.focus();
  });

  return <input type="text" ref={inputElement} />;
});
