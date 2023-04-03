With [`@marko/cli`’s `build` or `serve`](https://github.com/marko-js/cli/tree/main/packages/serve)

```
index.marko // index page "/"
about.marko // about page "/about"
hello/
|-- [name].marko // dynamic Hello page "/hello/Emily"
[rest].marko // dynamic parameter can be used as catch-all to show 404 page
```
