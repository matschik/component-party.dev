import { UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Schema } from "effect"

const InputHelloMessage = UiSchema.TaggedEnum({
  UpdatedText: { text: Schema.String }
})

export const InputHello = Html.component({
  name: "InputHello",
  model: Schema.Struct({ text: Schema.String }),
  message: InputHelloMessage
}).make({
  init: () => ({ text: "Hello World" }),
  update: {
    UpdatedText: ($, { text }) => $.evolve({ text })
  },
  view: (h, model) =>
    h.div(
      h.p(model.text),
      h.input
        .value(model.text)
        .on("input", ({ value }) => InputHelloMessage.UpdatedText({ text: value }))
    )
})
