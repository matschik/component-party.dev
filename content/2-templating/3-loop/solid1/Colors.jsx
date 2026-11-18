import { For } from "solid-js";

export default function Colors() {
  const colors = ["red", "green", "blue"];

  return (
    <ul>
      <For each={colors}>{(color) => <li>{color}</li>}</For>
    </ul>
  );
}
