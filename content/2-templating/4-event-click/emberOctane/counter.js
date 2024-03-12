import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class Counter extends Component {
  @tracked count = 0;

  incrementCount = () => this.count++;
}
