import { Component, computed, signal } from "@angular/core";

@Component({
  selector: "app-double-count",
  template: `<div>{{ doubleCount() }}</div>`,
})
export class DoubleCountComponent {
  count = signal(10);

  doubleCount = computed(() => this.count() * 2);
}
