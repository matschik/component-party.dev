import m from "mithril";
import FunnyButton from "./FunnyButton.js";

export default App = () => ({
  view: () => m("", m(FunnyButton), m(FunnyButton, "I got Content")),
});
