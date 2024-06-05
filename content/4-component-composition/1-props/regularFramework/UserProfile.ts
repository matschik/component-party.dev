import { NewElement } from "regular-framework/client";

export default (
  name: string,
  age: number,
  favoriteColor: string[],
  isAvailable: boolean
) => {
  return NewElement(
    "div",
    {},
    NewElement("p", {}, "My name is ", name),
    NewElement("p", {}, "My age is ", age),
    NewElement(
      "p",
      {},
      "My favourite colors are ",
      favoriteColor.join(", "),
      "!"
    ),
    NewElement("p", {}, "I am", isAvailable ? "" : "not", " available")
  );
};
