import { onMount } from "solid-js";

export default function InputIndeterminate() {
  let inputElement;

  onMount(() => inputElement.indeterminate = true);

  return <input ref={inputElement} type="checkbox" />;
}
