import m from 'mithril'

export default Colors = () => {
  const colors = ["red", "green", "blue"];
  return {
    view: () => m('ul',
      colors.map(color => m('li', { key: color }, color))
    )
  }
}
