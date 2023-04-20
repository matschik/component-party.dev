import m from "mithril";
export default function UserProfile() {
  return {
    view: ({
      attrs: {
        user: { username, email },
        updateUsername,
      },
    }) =>
      m(
        "div",
        m("h2", "My Profile"),
        m("p", `Username: ${username}`),
        m("p", `Email : ${email}`),
        m(
          "button",
          { onclick: () => updateUsername("Jane") },
          "Update username to Jane"
        )
      ),
  };
}
