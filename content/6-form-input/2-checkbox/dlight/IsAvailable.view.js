import { View } from "@dlightjs/dlight";

@View
class IsAvailable {
  isAvailable = false;
  handleChange() {
    this.isAvailable = !this.isAvailable;
  }

  Body() {
    input()
      .id("is-available")
      .type("checkbox")
      .checked(this.isAvailable)
      .onChange(this.handleChange);
    label("Is available").for("is-available");
  }
}

export default IsAvailable;
