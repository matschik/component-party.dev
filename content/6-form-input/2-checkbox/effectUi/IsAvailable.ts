import { UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Schema } from "effect"

const IsAvailableMessage = UiSchema.TaggedEnum({
  ToggledIsAvailable: { checked: Schema.Boolean }
})

export const IsAvailable = Html.component({
  name: "IsAvailable",
  model: Schema.Struct({ isAvailable: Schema.Boolean }),
  message: IsAvailableMessage
}).make({
  init: () => ({ isAvailable: false }),
  update: {
    ToggledIsAvailable: ($, { checked }) => $.evolve({ isAvailable: checked })
  },
  view: (h, model) =>
    h.div(
      h.input
        .id("is-available")
        .attr("type", "checkbox")
        .checked(model.isAvailable)
        .on("change", ({ checked }) =>
          IsAvailableMessage.ToggledIsAvailable({ checked })
        ),
      h.label.attr("for", "is-available").children("Is available")
    )
})
