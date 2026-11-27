import { Html } from "@effect/ui/html"
import { Schema } from "effect"
import { FunnyButton } from "./FunnyButton.ts"

export const App = Html.component({
  name: "App",
  model: Schema.Null,
  message: Schema.Never
}).make({
  init: () => null,
  update: ($) => $.model,
  view: (h) => FunnyButton(h, { slots: { children: "Click me!" } })
})
