import { RippleObject } from "ripple";

import { UserContext } from "./UserContext.tsrx";
import { UserProfile } from "./UserProfile.tsrx";

export function App() {
  const user = new RippleObject({
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  });

  UserContext.set(user);

  return <>
    <h1>"Welcome back, "{user.username}</h1>
    <UserProfile />
  </>;
}
