import m from 'mithril'

export default IsAvailable = () => {
  let isAvailable = false
  const onUpdate = isAvailable = !isAvailable

  return {
    view: () => m('',

      m('input', {
        id: "is-available",
        type: "checkbox",
        checked: isAvailable,
        onChange: handleChange,
      }),
      m('label', { for: 'is-available' }, 'Is available'),
    )
  }
}

