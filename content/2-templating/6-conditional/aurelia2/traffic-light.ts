const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export class App {
  lightIndex = 0;
  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex];
  }

  nextLight() {
    this.lightIndex = (this.lightIndex + 1) % TRAFFIC_LIGHTS.length;
  }
}
