import { NewElement } from "regular-framework/client";

export default () => {
  let input: HTMLInputElement;
  return NewElement("input", {
    events(events) {
      if (events.type === "add") {
        input = events.target as HTMLInputElement;
        input.focus();
      }
    },
  });
};
