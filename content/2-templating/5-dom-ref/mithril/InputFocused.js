import m from 'mithril'

export default InputFocused = () => {
  let value = '';
  return {
    view: () => m('input', { type: 'text', value, oninput: e => value = e.target.value })
  }
}
