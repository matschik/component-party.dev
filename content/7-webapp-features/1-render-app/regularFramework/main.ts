import {
  AddElement,
  NewElement,
  WatchRootElement,
} from "regular-framework/client";

export const root = NewElement("div", {
  styles: {
    display: "contents",
  },
});

WatchRootElement(root);

AddElement(document.body, root);
