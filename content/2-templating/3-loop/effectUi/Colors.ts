import { Html } from "@effect/ui/html"
import { Schema } from "effect"

const colors = ["red", "green", "blue"]

export const Colors = Html.component({
  name: "Colors",
  model: Schema.Null,
  message: Schema.Never
}).make({
  init: () => null,
  update: ($) => $.model,
  view: (h) =>
    h.ul(colors.map((color) => h.li.key(color).children(color)))
})
