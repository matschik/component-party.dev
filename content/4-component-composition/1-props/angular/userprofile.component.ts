import { Component, Input } from "@angular/core";

@Component({
  selector: "app-userprofile",
  template: `
    <p>My name is {{ name }}!</p>
    <p>My age is {{ age }}!</p>
    <p>My favourite colors are {{ favouriteColors.join(", ") }}!</p>
    <p>I am {{ isAvailable ? "available" : "not available" }}</p>
  `,
})
export class UserprofileComponent {
  @Input() name: string = "";
  @Input() age: number = 0;
  @Input() favouriteColors: string[] = [];
  @Input() isAvailable: boolean = false;
}
