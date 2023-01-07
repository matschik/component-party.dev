With [@vaadin/router](https://vaadin.com/router)

```html
<div id="outlet"></div>

<script>
  // import {Router} from '@vaadin/router'; // for Webpack / Polymer CLI
  // const Router = Vaadin.Router; // for vaadin-router.umd.js

  // select the DOM node where the router inserts route Web Components
  const outlet = document.getElementById("outlet");
  const router = new Router(outlet);
  router.setRoutes([
    { path: "/", component: "x-home-view" },
    { path: "/about", component: "x-about-view" },
  ]);
</script>
```
