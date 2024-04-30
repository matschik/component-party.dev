import { Component, signal, computed } from "@angular/core";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

@Component({
  standalone: true,
  selector: "app-trafficlight",
  template: `
    <button (click)="nextLight()">Next light</button>
    <p>Light is: {{ light() }}</p>
    <p>
      You must
      @switch (light()) {
        @case ("red") {
          <span>STOP</span>
        }
        @case ("orange") {
          <span>SLOW DOWN</span>
        }
        @case ("green") {
          <span>GO</span>
        }
      }
    </p>
  `,
})
export class TrafficlightComponent {
  lightIndex = signal(0);
  light = computed(() => TRAFFIC_LIGHTS[this.lightIndex()]);

  nextLight() {
    this.lightIndex.update((index) => (index + 1) % TRAFFIC_LIGHTS.length);
  }
}
