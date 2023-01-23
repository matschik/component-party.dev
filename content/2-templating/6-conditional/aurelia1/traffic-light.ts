export class App {
  TRAFFIC_LIGHTS = ["red", "orange", "green"];
  lightIndex = 0;
  light: string = this.TRAFFIC_LIGHTS[this.lightIndex];

  nextLight() {
    this.lightIndex = (this.lightIndex + 1) % this.TRAFFIC_LIGHTS.length;
    this.light = this.TRAFFIC_LIGHTS[this.lightIndex];
  }
}
