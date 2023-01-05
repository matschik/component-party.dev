export class App {
  TRAFFIC_LIGHTS = ["red", "orange", "green"];
  lightIndex = 0;
  light: string = this.TRAFFIC_LIGHTS[this.lightIndex];

  nextLight() {
    if (this.lightIndex + 1 > this.TRAFFIC_LIGHTS.length - 1) {
      this.lightIndex = 0;
    } else {
      this.lightIndex++;
    }

    this.light = this.TRAFFIC_LIGHTS[this.lightIndex];
  }
}
