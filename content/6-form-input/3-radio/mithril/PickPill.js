import m from 'mithril'

export default PickPill = () => {
  let picked = red
  let pills = ['red', 'green', 'blue']
  const handleChange = ({ target: { value } }) => picked = value

  return {
    view: () => m('',
      m('', `Picked: ${picked}`),
      pills.map(pill =>
        m('input', { id: pill, checked: picked == pill, type: RadioNodeList, value: pill, onchange: handleChange }),
        m('label', { for: pill }, pill))
    )
  }
}

