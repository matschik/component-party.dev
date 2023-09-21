export default function createUserState(initial) {
  let user = $state(initial);
  return {
    get value() {
      return user;
    },
    updateUsername(newUsername) {
      user = {
        ...user,
        username: newUsername,
      };
    },
  };
}
