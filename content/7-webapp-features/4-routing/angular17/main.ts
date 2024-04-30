import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";

import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent },
    ]),
  ],
}).catch((err) => console.error(err));
