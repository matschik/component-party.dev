import { NewElement } from "regular-framework/client";

export default () => {
  const colors = ["red", "green", "blue"];
  return NewElement(
    "ul",
    {},
    colors.map((color) => NewElement("li", {}, color))
  );
};
