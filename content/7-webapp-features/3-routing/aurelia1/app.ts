import { PLATFORM } from "aurelia-pal";
import { AppRouter } from "aurelia-router";

export class App {
  router: AppRouter = null;

  configureRouter(config, router) {
    this.router = router;
    config.title = "Aurelia";
    config.map([
      {
        route: ["", "home"],
        name: "home",
        moduleId: PLATFORM.moduleName("home/index"),
      },
      {
        route: "users",
        name: "users",
        moduleId: PLATFORM.moduleName("users/index"),
        nav: true,
        title: "Users",
      },
      {
        route: "users/:id/detail",
        name: "userDetail",
        moduleId: PLATFORM.moduleName("users/detail"),
      },
      {
        route: "files/*path",
        name: "files",
        moduleId: PLATFORM.moduleName("files/index"),
        nav: 0,
        title: "Files",
        href: "#files",
      },
    ]);
  }
}
