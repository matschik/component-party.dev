import { Component, NgModule } from "@angular/core";

@Component({
  selector: "app-helloworld",
  template: `<h1>Hello world</h1>`,
})
export class HelloworldComponent {}

@NgModule({
  declarations: [HelloworldComponent],
  exports: [HelloworldComponent],
})
export class HelloworldModule {}
