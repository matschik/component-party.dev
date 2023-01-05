import PropTypes from "prop-types";

export default function UserProfile({
  name = "",
  age = null,
  favouriteColors = [],
  isAvailable = false,
}) {
  return (
    <>
      <p>My name is {name}!</p>
      <p>My age is {age}!</p>
      <p>My favourite colors are {favouriteColors.join(", ")}!</p>
      <p>I am {isAvailable ? "available" : "not available"}</p>
    </>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  favouriteColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  isAvailable: PropTypes.bool.isRequired,
};
