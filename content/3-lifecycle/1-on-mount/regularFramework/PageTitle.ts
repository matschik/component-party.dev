import { NewElement, NewSignal } from "regular-framework/client";

export default () => {
  const pageTitle = NewSignal("");
  return NewElement(
    "p",
    {
      events(events) {
        if (events.type === "add") {
          pageTitle.value = document.title;
        }
      },
    },
    "Page title: ",
    pageTitle
  );
};
