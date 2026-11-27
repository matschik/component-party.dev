import { Html } from "@effect/ui/html"
import { Schema } from "effect"

export const App = Html.component({
  name: "App",
  model: Schema.Null,
  message: Schema.Never
}).make({
  init: () => null,
  update: ($) => $.model,
  view: (h) => h.h1("Hello world")
})
