import { NewElement, NewSignal } from "regular-framework/client";

export default () => {
  const isAvailable = NewSignal(false);

  return [
    NewElement("input", {
      id: "is-available",
      type: "checkbox",
      checked: isAvailable,
    }),
    NewElement(
      "label",
      {
        for: "is-available",
      },
      "Is available?"
    ),
  ];
};
