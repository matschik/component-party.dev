import { onSettled } from "solid-js";

export default function InputFocused() {
  let inputElement;

  onSettled(() => inputElement.focus());

  return <input ref={inputElement} type="text" />;
}
