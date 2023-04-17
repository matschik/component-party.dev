import { bindable } from "aurelia";

export class UserProfile {
  @bindable name = "";
  @bindable age = null;
  @bindable favouriteColors = [];
  @bindable isAvailable = true;
}
