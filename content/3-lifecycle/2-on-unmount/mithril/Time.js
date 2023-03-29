import m from 'mithril'

export default Time = () => {
  let time = new Date().toLocaleTimeString()

  const timer = setInterval(() => {
    time = new Date().toLocaleTimeString();
    m.redraw()
  }, 1000);

  return {
    view: () => m('p', `Current time: ${time}`),
    onremove: () => clearInterval(timer),
  }
}
