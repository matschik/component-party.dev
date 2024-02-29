import { View } from "@dlightjs/dlight";

@View
class PickPill {
  picked = "red";
  handleChange(event) {
    this.picked = event.target.value;
  }

  Body() {
    div(`Picked: ${this.picked}`);

    input()
      .id("blue-pill")
      .checked(this.picked === "blue")
      .type("radio")
      .value("blue")
      .onChange(this.handleChange);
    label("Blue pill").for("blue-pill");

    input()
      .id("red-pill")
      .checked(this.picked === "red")
      .type("radio")
      .value("red")
      .onChange(this.handleChange);
    label("Red pill").for("red-pill");
  }
}

export default PickPill;
