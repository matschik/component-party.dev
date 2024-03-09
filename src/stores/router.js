import { writable } from "svelte/store";
import { createRouter } from "radix3";

const initialState = {
  path: window.location.pathname,
  component: null,
};

export const route = writable(initialState);

// Define your routes, using lazy loading for components
const routes = [
  { path: "/", component: () => import("../pages/Home.svelte") },
  { path: "/about", component: () => import("../pages/About.svelte") },
  // Add more routes as needed
];

// Create the router
const router = createRouter(routes);

// Function to navigate
export function navigate(path) {
  const match = router.resolve(path);
  if (match) {
    match.component().then((module) => {
      route.set({ path, component: module.default });
      window.history.pushState({}, "", path);
    });
  }
}

// Listen to history changes
window.addEventListener("popstate", () => {
  navigate(window.location.pathname);
});
