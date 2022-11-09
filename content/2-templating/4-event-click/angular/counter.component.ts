import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <p>Counter: {{ count }}</p>
    <button (click)="incrementCount()">+1</button>
  `,
})
export class CounterComponent {
  count = 0;

  incrementCount() {
    this.count++;
  }
}
