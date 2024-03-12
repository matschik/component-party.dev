import Component from "@glimmer/component";

export default class NameComponent extends Component {
  name = "John";

  <template>
    <h1>Hello {{this.name}}</h1>
  </template>
}
