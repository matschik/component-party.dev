import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export default class TrafficLight extends Component {
  @tracked lightIndex = 0;

  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex];
  }

  nextLight = () => {
    this.lightIndex = (this.lightIndex + 1) % TRAFFIC_LIGHTS.length;
  };
}
