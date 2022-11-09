import { component$ } from "@builder.io/qwik";
import UserProfile from "./UserProfile";

const App = component$(() => {
  return (
    <UserProfile
      name="John"
      age={20}
      favouriteColors={["green", "blue", "red"]}
      isAvailable
    />
  );
});

export default App;
