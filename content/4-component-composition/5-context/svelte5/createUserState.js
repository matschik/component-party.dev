export default function createUserState(initial) {
  let username = $state(initial.username);
  return {
    ...initial,
    get username() {
      return username;
    },
    set username(value) {
      username = value;
    },
  };
}
