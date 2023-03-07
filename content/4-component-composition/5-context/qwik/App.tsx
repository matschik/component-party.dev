import {
  component$,
  useStore,
  useContextProvider,
  createContext,
  $,
} from "@builder.io/qwik";
import UserProfile from "./UserProfile";

export const UserContext = createContext("user-context");

const App = component$(() => {
  const user = useStore({
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  });

  const updateUsername = $((newUsername) => {
    user.username = newUsername;
  });

  useContextProvider(UserContext, { user, updateUsername });

  return (
    <>
      <h1>Welcome back, {user.username}</h1>
      <UserProfile />
    </>
  );
});

export default App;
