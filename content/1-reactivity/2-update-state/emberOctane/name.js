import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class NameComponent extends Component {
  @tracked name = "John";

  constructor(owner, args) {
    super(owner, args);

    this.name = "Jane";
  }
}
