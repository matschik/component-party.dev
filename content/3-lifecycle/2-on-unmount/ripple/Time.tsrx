import { effect, track } from "ripple";

export default function Time() {
  let &[time] = track(new Date().toLocaleTimeString());

  effect(() => {
    const timer = setInterval(() => {
      time = new Date().toLocaleTimeString();
    }, 1000);

    return () => clearInterval(timer);
  });

  return <h1>"Current time: "{time}</h1>;
}
