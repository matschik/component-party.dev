import { NewElement } from "regular-framework/client";
// @ts-ignore
import styles from "./CssStyle.module.css";

export default () => {
  return [
    NewElement(
      "h1",
      {
        class: styles.title,
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
