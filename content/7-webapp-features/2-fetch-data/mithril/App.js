import m from "mithril";

export default function App() {
  let isLoading = false;
  let error = null;
  let users = [];

  async function fetchUsers() {
    isLoading = true;
    try {
      const { results } = await m.request(
        "https://randomuser.me/api/?results=3"
      );
      users = results;
    } catch (err) {
      error = err;
    }
    isLoading = false;
  }

  return {
    oninit: fetchUsers,
    view() {
      if (isLoading) return m("p", "Fetching users...");
      if (error) return m("p", "An error occurred while fetching users");
      return users.map((user) =>
        m(
          "li",
          { key: user.login.uuid },
          m("img", { src: user.picture.thumbnail, alt: "user" }),
          m("p", `${user.name.first} ${user.name.last}`)
        )
      );
    },
  };
}
