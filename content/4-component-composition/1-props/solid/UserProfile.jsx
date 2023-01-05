import { mergeProps } from "solid-js";

export default function UserProfile(props) {
  const merged = mergeProps(
    { name: "", age: null, favouriteColors: [], isAvailable: false },
    props
  );

  return (
    <>
      <p>My name is {merged.name}!</p>
      <p>My age is {merged.age}!</p>
      <p>My favourite colors are {merged.favouriteColors.join(", ")}!</p>
      <p>I am {merged.isAvailable ? "available" : "not available"}</p>
    </>
  );
}
