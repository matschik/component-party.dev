export class ViewportSize {
  viewportSize = "";

  attached(): void {
    this.viewportSize = `${window.innerWidth} × ${window.innerHeight}`;
  }
}
