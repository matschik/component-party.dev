import { View } from "@dlightjs/dlight";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

@View
class TrafficLight {
  lightIndex = 0;
  light = TRAFFIC_LIGHTS[this.lightIndex];
  nextLight() {
    this.lightIndex = (this.lightIndex + 1) % TRAFFIC_LIGHTS.length;
  }

  Body() {
    button("Next light").onClick(this.nextLight);
    p(`Light is: ${this.light}`);
    p();
    {
      ("You must");
      if (this.light === "red") {
        span("STOP");
      } else if (this.light === "orange") {
        span("SLOW DOWN");
      } else if (this.light === "green") {
        span("GO");
      }
    }
  }
}

export default TrafficLight;
