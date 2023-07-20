import m from "mithril";
import UserProfile from "./UserProfile.js";

export default function App() {
  return {
    view: () =>
      m(UserProfile, {
        name: "john",
        age: 20,
        favouriteColors: ["green", "blue", "red"],
        isAvailable: true,
      }),
  };
}
