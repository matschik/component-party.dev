import { View } from '@dlightjs/dlight';

@View
class PageTitle {
  pageTitle = '';

  didMount() {
    this.pageTitle = document.title;
  }

  Body() {
    p(`Page title: ${this.pageTitle}`)
  }
}

export default PageTitle;