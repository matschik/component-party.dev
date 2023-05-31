import { UserProfile } from "./user-profile";

export class App {
  static dependencies = [UserProfile]; // static dependecies way or registered globablly
  age = 20;
  name = "John";
  colors = ["green", "blue", "red"];
  available = false;
}
