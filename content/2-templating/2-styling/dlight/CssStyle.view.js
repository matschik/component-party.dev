import { View } from "@dlightjs/dlight";
import "./style.css";

@View
class CssStyle {
  Body() {
    h1("I am red").class("title");
    button("I am a button").style({ fontSize: "10rem" });
  }
}

export default CssStyle;
