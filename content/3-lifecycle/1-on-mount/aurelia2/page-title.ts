export class PageTitle {
  pageTitle = "";

  attached(): void {
    this.pageTitle = document.title;
  }
}
