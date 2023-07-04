# 🧑‍💻 Contributing

This site is built with [Vite](https://vitejs.dev) and [Svelte](https://svelte.dev). Site content is written in Markdown format located in `content`. For simple edits, you can directly edit the file on GitHub and generate a Pull Request.

## Add a new framework

1.  Fork the project and create a new branch
2.  Add the new framework SVG logo in `public/framework`
3.  Install the ESLint plugin associated to the framework
4.  In `frameworks.mjs`, add a new entry with SVG link and ESLint configuration
5.  If the framework needs a language syntax highlight, add it to the call to `getHighlighter`’s `langs` argument in `build/lib/generateContent.js`
6.  To make a playground link:
    1. Add a `create${FRAMEWORK}Playground.js` file in `build/lib/playground`.
    2. That file should export a function that returns an object with a `fromContentByFilename` method that accepts an object of filepath keys and file content values, then returns an absolute URL to a framework’s online REPL with those files loaded.
    3. Register its export in `build/lib/playground/index.js`

## Improve website

For local development, [pnpm](https://pnpm.io/) is preferred as package manager:

```bash
pnpm i
pnpm run dev
```

This project requires Node.js to be `v14.0.0` or higher, because we use new JavaScript features in our code, such as optional chaining.
