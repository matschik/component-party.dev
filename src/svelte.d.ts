declare module "*.svelte" {
  import type { SvelteComponent } from "svelte";
  const component: typeof SvelteComponent;
  export default component;
}
