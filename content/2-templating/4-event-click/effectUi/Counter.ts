import { UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Schema } from "effect"

const CounterMessage = UiSchema.TaggedEnum({
  ClickedIncrement: {}
})

export const Counter = Html.component({
  name: "Counter",
  model: Schema.Struct({ count: Schema.Number }),
  message: CounterMessage
}).make({
  init: () => ({ count: 0 }),
  update: {
    ClickedIncrement: ($) => $.evolve({ count: (count) => count + 1 })
  },
  view: (h, model) =>
    h.div(
      h.p(`Counter: ${model.count}`),
      h.button.on("click", CounterMessage.ClickedIncrement()).children("+1")
    )
})
