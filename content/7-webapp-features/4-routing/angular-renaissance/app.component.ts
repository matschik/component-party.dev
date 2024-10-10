import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  selector: "app-root",
  template: `
    <ul>
      <li><a routerLink="/home">Home</a></li>
      <li><a routerLink="/about">About</a></li>
    </ul>
    <router-outlet />
  `,
})
export class AppComponent {}
