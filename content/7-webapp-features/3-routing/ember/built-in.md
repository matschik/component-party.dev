Built-in <a href="https://guides.emberjs.com/release/routing/">routing</a>

Given an `app/router.js` config of:

```js
Router.map(function () {
  this.route("about");
  this.route("fallback", { path: "*" });
});
```

```
|-- routes/
    |-- application.js // global app setup
    |-- index.js // handles minimally required data to show "/"
    |-- about.js // handles minimally required data to show "/about"
    |-- fallback.js // fallback page
|-- templates/
    |-- application.hbs // global app layout
    |-- index.hbs // index page "/"
    |-- about.hbs // about page "/about"
    |-- fallback.hbs // fallback layout
```
