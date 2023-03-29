import m from "mithril";

export default function App() {
  let isLoading = false;
  let error = null;
  let data = [];

  const onSuccess = (data) => (data = data);
  const onError = (err) => (error = err);
  fetchUsers(isLoading, onSuccess, onError);

  return {
    view: () =>
      m(
        "",
        isLoading && m("p", "Fetching users..."),
        error
          ? m("p", "An error occured while fetching users")
          : users.map((user) =>
              m(
                "li",
                { key: user.login.uuid },
                m("img", { src: user.picture.profile, alt: "user" }),
                m("p", `${user.name.first} ${user.name.last}`)
              )
            )
      ),
  };
}
