import { customElement, bindable } from "aurelia-templating";

@customElement("user-profile")
export class UserProfile {
  @bindable name = "";
  @bindable age = null;
  @bindable favouriteColors = [];
  @bindable isAvailable = true;
}
