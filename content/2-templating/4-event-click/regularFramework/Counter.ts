import { NewElement, NewSignal } from "regular-framework/client";

export default () => {
  const count = NewSignal(0);
  const increment = () => {
    count.value = count.value + 1;
  };
  return [
    NewElement("p", {}, count),
    NewElement(
      "button",
      {
        events(events) {
          if (events.type === "click") increment();
        },
      },
      "+1"
    ),
  ];
};
