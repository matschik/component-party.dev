import m from 'mithril'
export default PageTitle = () => {

  let pageTitle = document.title

  return {
    view: () => m('p', `Page title: ${pageTitle}`)
  }
}
