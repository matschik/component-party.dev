import { Component } from "@angular/core";

@Component({
  selector: "app-colors",
  template: `
    <ul>
      @for (color of colors) {
        <li>{{ color }}</li>
      }
    </ul>
  `,
})
export class ColorsComponent {
  colors = ["red", "green", "blue"];
}
