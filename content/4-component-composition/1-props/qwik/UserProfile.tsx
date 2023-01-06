import { component$ } from "@builder.io/qwik";

type Props = {
  name: string;
  age: number;
  favouriteColors: string[];
  isAvailable: boolean;
};

const UserProfile = component$((props: Props) => {
  const {
    name = "",
    age = null,
    favouriteColors = [],
    isAvailable = false,
  } = props;

  return (
    <>
      <p>My name is {name}!</p>
      <p>My age is {age}!</p>
      <p>My favourite colors are {favouriteColors.join(", ")}!</p>
      <p>I am {isAvailable ? "available" : "not available"}</p>
    </>
  );
});

export default UserProfile;
