import { NewElement, NewSignal } from "regular-framework/client";

export default () => {
  const name = NewSignal("John");

  return NewElement("h1", {}, name);
};
