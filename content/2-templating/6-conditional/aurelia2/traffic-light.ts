const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export class App {
  lightIndex = 0;
  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex];
  }

  nextLight() {
    if (this.lightIndex + 1 > TRAFFIC_LIGHTS.length - 1) {
      this.lightIndex = 0;
    } else {
      this.lightIndex++;
    }
  }
}
