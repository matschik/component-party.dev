import { NewElement, NewSignal } from "regular-framework/client";

export default () => {
  const text = NewSignal("Hello, world!");

  return [
    NewElement("p", {}, text),
    NewElement("input", {
      value: text,
      events(events) {
        if (events.type === "input")
          text.value = (events.target as HTMLInputElement).value;
      },
    }),
  ];
};
