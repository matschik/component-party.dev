import m from "mithril";

export default Name = () => {
  let name = "John";
  setTimeout(() => {
    name = 'Jane';
    m.redraw()
  }, 1000)
  return {
    view: () => m('h1', name)
  };
}
