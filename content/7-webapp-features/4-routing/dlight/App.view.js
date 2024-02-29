import { View } from "@dlightjs/dlight";
import { RouteGroup, Route, Link } from "@dlightjs/components";
import Home from "./Home.view";

@View
class App {
  @Snippet
  Links() {
    Link("To Home").to("/home");
    Link("To About").to("/about");
    Link("To Nowhere").to("/nowhere");
  }
  Body() {
    this.Links();

    RouteGroup();
    {
      Route("home").comp(Home);
      Route("about").comp(() => import("./About.view"));

      Route();
      {
        ("Oops! Page not found!");
      }
    }
  }
}

export default App;
