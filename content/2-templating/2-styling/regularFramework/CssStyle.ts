import { NewElement } from "regular-framework/client";
import "./CssStyle.module.css";

export default () => {
  return [
    NewElement(
      "h1",
      {
        class: "title",
      },
      "I am red"
    ),
    NewElement(
      "button",
      {
        styles: {
          fontSize: "10rem",
        },
      },
      "I am a button"
    ),
  ];
};
