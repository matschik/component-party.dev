import m from "mithril";
import { FunnyButton } from "./FunnyButton.jsx";

export default function App() {
  return {
    view: () => m(FunnyButton, "Click me!"),
  };
}
