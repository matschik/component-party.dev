import { effect, track } from "ripple";

export default function PageTitle() {
  let &[pageTitle] = track("");

  effect(() => {
    pageTitle = document.title;
  });

  return <h1>"Page title: "{pageTitle}</h1>;
}
