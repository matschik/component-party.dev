import App from "./App.svelte";
import "./app.css";
import { mount } from "svelte";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

const app = mount(App, { target: document.getElementById("app") });

export default app;
