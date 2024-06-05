import { NewElement } from "regular-framework/client";

export default (yes: Function, no: Function) => [
  NewElement(
    "button",
    {
      events(events) {
        if (events.type === "click") yes();
      },
    },
    "Yes"
  ),
  NewElement(
    "button",
    {
      events(events) {
        if (events.type === "click") no();
      },
    },
    "No"
  ),
];
