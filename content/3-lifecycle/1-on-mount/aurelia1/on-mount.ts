export class OnMount {
  pageTitle = "";

  attached(): void {
    this.pageTitle = document.title;
  }
}
