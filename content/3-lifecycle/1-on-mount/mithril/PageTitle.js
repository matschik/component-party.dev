import m from "mithril";

export default function PageTitle() {
  return {
    view: () => m("p", `Page title: ${document.title}`),
  };
}
