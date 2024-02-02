import { Component } from "@angular/core";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

@Component({
  selector: "app-trafficlight",
  template: `
    <button (click)="nextLight()">Next light</button>
    <p>Light is: {{ light }}</p>
    <p>
      You must
      @switch (light) {
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
  lightIndex = 0;

  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex];
  }

  nextLight() {
    this.lightIndex = (this.lightIndex + 1) % TRAFFIC_LIGHTS.length;
  }
}
