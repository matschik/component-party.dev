With [`@marko/run`](https://github.com/marko-js/run/tree/main/packages/serve)

```
routes/
|-- +page.marko // index page "/"
|-- about/
    |-- +page.marko // about page "/about"
|-- +layout.marko // global app layout
|-- +handler.{js,ts,*} // conditionally render HTML, API route, run arbitrary code…
|-- +middleware.{js,ts,*} // added to HTTP framework middleware chain
|-- +meta.{js,ts,*} // adds metadata to route
|-- +404.marko // shows when no suitable route found
|-- +500.marko // shows when any route throws
|-- /path/_less/
    |-- +page.marko // pathless directory, page "/path"
|-- /$dynamic/
    |-- +page.marko // dynamic parameter, can be used as a route-specific 404
|-- /$$catchall/ // like dynamic, but consumes all path segments until the end
```
