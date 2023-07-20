import m from "mithril";

export default function App() {
  const navigateTo = (loc) => m.route.set(loc);

  return {
    view: () =>
      m(
        "ul",
        m("li", m("button", { onclick: navigateTo("/foo") }, "foo")),
        m("li", m("button", { onclick: navigateTo("/bar") }, "bar"))
      ),
  };
}
