import Component, { tracked } from "@glimmer/component";

export default class DoubleCount extends Component {
  @tracked count = 10;

  get doubleCount() {
    return this.count * 2;
  }
}
