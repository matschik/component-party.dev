interface UserProfileProps {
  name?: string;
  age?: number | null;
  favouriteColors?: string[];
  isAvailable?: boolean;
}

export function UserProfile(&{
  name = "",
  age = null,
  favouriteColors = [],
  isAvailable = false,
}: UserProfileProps) {
  return <>
    <p>"My name is "{name}"!"</p>
    <p>"My age is "{age}"!"</p>
    <p>"My favourite colors are "{favouriteColors.join(", ")}"!"</p>
    <p>"I am "{isAvailable ? "available" : "not available"}</p>
  </>;
}
