import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class App extends Component {
  @tracked canCome = true;

  handleYes = () => (this.canCome = true);
  handleNo = () => (this.canCome = false);
}
