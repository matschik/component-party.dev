import Component from "@glimmer/component";

export default class PageTitle extends Component {
  pageTitle = () => document.title;

  <template>
    <p>Page title is: {{(this.pageTitle)}}</p>
  </template>
}
