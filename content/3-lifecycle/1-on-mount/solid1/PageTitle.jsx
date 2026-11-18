import { createSignal, onMount } from "solid-js";

export default function PageTitle() {
  const [pageTitle, setPageTitle] = createSignal("");

  onMount(() => {
    setPageTitle(document.title);
  });

  return <p>Page title: {pageTitle()}</p>;
}
