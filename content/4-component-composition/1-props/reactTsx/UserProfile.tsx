interface UserProfileProps {
  name: string;
  age: number;
  favouriteColors: string[];
  isAvailable: boolean;
}

export default function UserProfile({
  name,
  age,
  favouriteColors,
  isAvailable,
}: UserProfileProps) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Favourite colours: {favouriteColors.join(", ")}</p>
      <p>Is available: {isAvailable ? "yes" : "no"}</p>
    </div>
  );
}
