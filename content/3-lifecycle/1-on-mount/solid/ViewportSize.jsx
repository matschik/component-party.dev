import { createSignal, onMount } from "solid-js";

export default function ViewportSize() {
  const [viewportSize, setViewportSize] = createSignal("");

  onMount(() => {
    setViewportSize(`${window.innerWidth} × ${window.innerHeight}`);
  });

  return <p>Viewport size: {viewportSize()}</p>;
}
