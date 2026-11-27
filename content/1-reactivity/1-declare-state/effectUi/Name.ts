import { Html } from "@effect/ui/html"
import { Schema } from "effect"

export const Name = Html.component({
  name: "Name",
  model: Schema.Struct({ name: Schema.String }),
  message: Schema.Never
}).make({
  init: () => ({ name: "John" }),
  update: ($) => $.model,
  view: (h, model) => h.h1(`Hello ${model.name}`)
})
