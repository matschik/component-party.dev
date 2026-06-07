import { UserProfile } from "./UserProfile.tsrx";

export function App() {
  return <UserProfile
    name="John"
    age={20}
    favouriteColors={["green", "blue", "red"]}
    isAvailable
  />;
}
