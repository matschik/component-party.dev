import { onMount } from "solid-js";

export default function InputFocused() {
  let inputElement;

  onMount(() => inputElement.focus());

  return <input ref={inputElement} type="text" />;
}
