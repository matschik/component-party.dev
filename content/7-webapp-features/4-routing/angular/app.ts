import { NgModule, Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";

@Component({
  selector: "app-root",
  template: `
    <ul>
      <li><a routerLink="/home">Home</a></li>
      <li><a routerLink="/about">About</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent],
  imports: [
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
