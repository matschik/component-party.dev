import m from "mithril";
import UserProfile from "./UserProfile";

export default function App() {
  const user = {
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  };

  const updateUsername = (username) => (user.username = username);

  return {
    view: () =>
      m(
        "",
        m("h1", `Welcome Back, ${user.username}`),
        m(UserProfile, { user, updateUsername })
      ),
  };
}
