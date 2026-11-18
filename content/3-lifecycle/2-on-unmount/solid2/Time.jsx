import { createSignal, onSettled } from "solid-js";

export default function Time() {
  const [time, setTime] = createSignal(new Date().toLocaleTimeString());

  onSettled(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  });

  return <p>Current time: {time()}</p>;
}
