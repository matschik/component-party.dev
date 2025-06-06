import UserProfile from "./UserProfile.jsx";

export default function App() {
  return (
    <UserProfile
      name="John"
      age={20}
      favouriteColors={["green", "blue", "red"]}
      isAvailable
    />
  );
}
