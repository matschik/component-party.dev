# 🧑‍💻 Contributing

This site is built with [Vite](https://vitejs.dev) and [Svelte](https://svelte.dev). Site content is written in Markdown format located in `content`. For simple edits, you can directly edit the file on GitHub and generate a Pull Request.

## Add a new framework

1.  Fork the project and create a new branch
2.  Add the new framework SVG logo in `public/framework`
3.  In `frameworks.ts`, add a new entry with SVG link
4.  If the framework needs a language syntax highlight, add it to the call to `getHighlighter`’s `langs` argument in `build/lib/generateContent.ts`
5.  To make a playground link in `build/lib/playgroundUrlByFramework.ts`.

## Improve website

For local development, [pnpm](https://pnpm.io/) is preferred as package manager:

```bash
pnpm i
pnpm run dev
```

This project requires Node.js to be `v22.18.0` or higher, because we use new JavaScript features in our code, such as optional chaining.
