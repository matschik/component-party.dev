import m from "mithril";

export default Counter = () => {
  let count = 0
  const incrementCount = () => count = count + 1
  return {
    view: () => m('',
      m('p', `Counter: ${count}`),
      m('button', { onclick: e => incrementCount() }, '+1')
    )
  }
}
