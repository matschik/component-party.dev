# 🧑‍💻 Contributing

This site is built with [Astro](https://docs.astro.build). Site content is written in Markdown format located in `content`. For simple edits, you can directly edit the file on GitHub and generate a Pull Request.

## Add a framework

1.  Fork the project and create a new branch
2.  Add the new framework SVG logo in `public/framework`
3.  Install the ESLint plugin associated to the framework
4.  In `frameworks.mjs`, add a new entry with SVG link and ESLint configuration

## Improve website

For local development, [pnpm](https://pnpm.io/) is preferred as package manager:

```bash
pnpm i
pnpm run dev
```

This project requires Node.js to be `v14.0.0` or higher, because we use new JavaScript features in our code, such as optional chaining.
