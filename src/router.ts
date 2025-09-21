import { createRouter } from "sv-router";
import Index from "./Index.svelte";

export const { p, navigate, isActive, route } = createRouter({
  "/": Index,
});
