import { createSignal, onCleanup } from "solid-js";

export default function Time() {
  const [time, setTime] = createSignal(new Date().toLocaleTimeString());

  const timer = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  onCleanup(() => clearInterval(timer));

  return <p>Current time: {time()}</p>;
}
