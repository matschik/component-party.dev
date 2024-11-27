import { Component, input } from "@angular/core";

@Component({
  selector: "app-userprofile",
  template: `
    <p>My name is {{ name() }}!</p>
    <p>My age is {{ age() }}!</p>
    <p>My favourite colors are {{ favouriteColors().join(", ") }}!</p>
    <p>I am {{ isAvailable() ? "available" : "not available" }}</p>
  `,
})
export class UserprofileComponent {
  name = input("");
  age = input(0);
  favouriteColors = input<string[]>([]);
  isAvailable = input(false);
}
