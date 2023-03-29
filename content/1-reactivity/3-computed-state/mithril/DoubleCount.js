import m from "mithril";

export default DoubleCount = () => {
  let count = 10;
  setTimeout(() => { count = count * 2; m.redraw() })
  return {
    view: () => m('div', count)
  };
}
