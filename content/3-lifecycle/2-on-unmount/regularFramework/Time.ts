import { NewElement, NewSignal } from "regular-framework/client";

export default () => {
  const time = NewSignal(new Date().toLocaleTimeString());
  const timer = setInterval(() => {
    time.value = new Date().toLocaleTimeString();
  }, 1000);
  return NewElement(
    "p",
    {
      events(events) {
        if (events.type === "remove") {
          clearInterval(timer);
        }
      },
    },
    "Current time: ",
    time
  );
};
