import { Component } from "@angular/core";

@Component({
  selector: "app-cssstyle",
  template: `
    <h1 class="title">I am red</h1>
    <button style="font-size: 10rem">I am a button</button>
  `,
  styles: [
    `
      .title {
        color: red;
      }
    `,
  ],
})
export class CssStyleComponent {}
