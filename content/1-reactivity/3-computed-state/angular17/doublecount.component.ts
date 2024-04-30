import { Component, computed, signal } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-doublecount",
  template: `<div>{{ doubleCount() }}</div>`,
})
export class DoubleCountComponent {
  count = signal(10);
  doubleCount = computed(() => this.count() * 2);
}
