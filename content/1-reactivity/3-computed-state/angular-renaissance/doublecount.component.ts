import { Component, computed, signal } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-doublecount",
  template: `<div>{{ doubleCount() }}</div>`,
})
export class DoublecountComponent {
  count = signal(10);

  doubleCount = computed(() => this.count() * 2);
}
