import m from "mithril";

export default Name = () => {
  let name = "John";

  return {
    view: () => m('h1', name)
  };
}
