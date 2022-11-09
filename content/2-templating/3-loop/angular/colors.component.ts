import { Component } from "@angular/core";

@Component({
  selector: "app-colors",
  template: `
    <ul>
      <li *ngFor="let color of colors">{{ color }}</li>
    </ul>
  `,
})
export class ColorsComponent {
  colors = ["red", "green", "blue"];
}
