import m from 'mithril'

export default App = () => ({
  view: () => m('ul',
    m('li', m(m.route.Link, { href: "/foo" }, "foo")),
    m('li', m(m.route.Link, { href: "/bar" }, "bar")),
  )
})
