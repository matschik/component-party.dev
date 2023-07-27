import Component from "@glimmer/component";

export default class ViewportSize extends Component {
  ViewportSize = () => `${window.innerWidth} × ${window.innerHeight}`;
}
