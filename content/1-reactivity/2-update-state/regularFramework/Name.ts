import { NewElement, NewSignal } from "regular-framework/client";

export default () => {
  const name = NewSignal("John");
  name.value = "Jane";
  
  return NewElement("h1", {}, name);
};
