import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class App extends Component {
  @tracked isHappy = true;

  handleYes = () => (this.isHappy = true);
  handleNo = () => (this.isHappy = false);
}
