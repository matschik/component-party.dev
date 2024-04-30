import { RouterModule } from "@angular/router";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  imports: [RouterModule],
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
