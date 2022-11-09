import { RouterModule } from "@angular/router";
import { NgModule, Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: "<h1>Home page</h1>",
})
export class HomeComponent {}

@Component({
  selector: "app-about",
  template: "<h1>About page</h1>",
})
export class AboutComponent {}

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
  imports: [
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent },
    ]),
  ],
  declarations: [AppComponent, HomeComponent, AboutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
