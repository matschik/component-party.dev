import { UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Schema } from "effect"

const PickPillMessage = UiSchema.TaggedEnum({
  PickedPill: { pill: Schema.String }
})

export const PickPill = Html.component({
  name: "PickPill",
  model: Schema.Struct({ picked: Schema.String }),
  message: PickPillMessage
}).make({
  init: () => ({ picked: "red" }),
  update: {
    PickedPill: ($, { pill }) => $.evolve({ picked: pill })
  },
  view: (h, model) => {
    const Pill = (pill: string, label: string) => [
      h.input
        .id(`${pill}-pill`)
        .attrs({ type: "radio", value: pill })
        .checked(model.picked === pill)
        .on("change", () => PickPillMessage.PickedPill({ pill })),
      h.label.attr("for", `${pill}-pill`).children(label)
    ]
    return h.div(
      h.div(`Picked: ${model.picked}`),
      ...Pill("blue", "Blue pill"),
      ...Pill("red", "Red pill")
    )
  }
})
