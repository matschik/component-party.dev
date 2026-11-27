import { Html } from "@effect/ui/html"
import { Schema } from "effect"

export const DoubleCount = Html.component({
  name: "DoubleCount",
  model: Schema.Struct({ count: Schema.Number }),
  message: Schema.Never
}).make({
  init: () => ({ count: 10 }),
  update: ($) => $.model,
  view: (h, model) => {
    const doubleCount = model.count * 2
    return h.div(String(doubleCount))
  }
})
