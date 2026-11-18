import { createSignal, onSettled } from "solid-js";

export default function PageTitle() {
  const [pageTitle, setPageTitle] = createSignal("");

  onSettled(() => {
    setPageTitle(document.title);
  });

  return <p>Page title: {pageTitle()}</p>;
}
