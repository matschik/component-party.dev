import { Html } from "@effect/ui/html"
import { Schema } from "effect"

export const HelloWorld = Html.component({
  name: "HelloWorld",
  model: Schema.Null,
  message: Schema.Never
}).make({
  init: () => null,
  update: ($) => $.model,
  view: (h) => h.h1("Hello world")
})
