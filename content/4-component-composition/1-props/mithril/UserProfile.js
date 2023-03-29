import m from 'mithril'

export default UserProfile = () => ({
  view: ({ attrs: {
    name,
    age,
    favouriteColors,
    isAvailable,
  } }) => m('div',
    m('p', `My name is ${name}!`),
    m('p', `My age is ${age}!`),
    m('p', `My favourite colors are ${favouriteColors.join(", ")}!`),
    m('p', `I am ${isAvailable ? "available" : "not available"}`)
  )
}
)
