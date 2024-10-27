import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

@Component({
  selector: "app-trafficlight",
  template: `
    <button (click)="nextLight()">Next light</button>
    <p>Light is: {{ light }}</p>
    <p>
      You must
      <ng-container [ngSwitch]="light">
        <span *ngSwitchCase="'red'">STOP</span>
        <span *ngSwitchCase="'orange'">SLOW DOWN</span>
        <span *ngSwitchCase="'green'">GO</span>
      </ng-container>
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

@NgModule({
  declarations: [TrafficlightComponent],
  imports: [CommonModule],
  exports: [TrafficlightComponent],
})
export class TrafficlightModule {}
