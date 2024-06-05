import { NewElement, NewSignal } from "regular-framework/client";

export default () => {
  const count = NewSignal(10);
  return NewElement("h1", {}, () => count.value * 2);
};
