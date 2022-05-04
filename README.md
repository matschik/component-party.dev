# Component Party 🎉

[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/matschik/component-party)

> Web component JS frameworks quick overview by their syntax and features

**Website: https://component-party.dev**

## Why ?

Many JS developers don't have a good overview of every existing JS framework with their own syntax and features.
How do we solve this ? Developers love having framework overview by examples. It's a quick introduction before going deeper.

## Roadmap

- [ ] Add SolidJS
- [ ] Add EmberJS
- [ ] Add Preact
- [ ] Add Alpine
- [ ] Add [Lit](https://lit.dev/)
- [ ] Add native JS ?

- [x] Add Angular
- [x] Website (built with Astro)
- [x] Add React
- [x] Add Svelte
- [x] Add Vue 3

## Contributing

This site is built with [Astro](https://docs.astro.build). Site content is written in Markdown format located in `content`. For simple edits, you can directly edit the file on GitHub and generate a Pull Request.

For local development, [pnpm](https://pnpm.io/) is preferred as package manager:

```bash
pnpm i
pnpm run dev
```

This project requires Node.js to be `v14.0.0` or higher, because we use new JavaScript features in our code, such as optional chaining.

### Add a framework

1) Fork the project and create a new branch
2) Add the new framework SVG logo in `public/framework`
3) Install the ESLint plugin assiociated to the framework
4) On `config.cjs` and `src/frameworks.js`, add a new entry with SVG link and ESLint configuration
