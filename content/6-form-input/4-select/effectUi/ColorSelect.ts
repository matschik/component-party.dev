import { UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Schema } from "effect"

const colors = [
  { id: 1, text: "red" },
  { id: 2, text: "blue" },
  { id: 3, text: "green" },
  { id: 4, text: "gray", isDisabled: true }
]

const ColorSelectMessage = UiSchema.TaggedEnum({
  PickedColor: { id: Schema.Number }
})

export const ColorSelect = Html.component({
  name: "ColorSelect",
  model: Schema.Struct({ selectedColorId: Schema.Number }),
  message: ColorSelectMessage
}).make({
  init: () => ({ selectedColorId: 2 }),
  update: {
    PickedColor: ($, { id }) => $.evolve({ selectedColorId: id })
  },
  view: (h, model) =>
    h.select
      .value(String(model.selectedColorId))
      .on("change", ({ value }) =>
        ColorSelectMessage.PickedColor({ id: Number(value) })
      )
      .children(
        colors.map((color) =>
          h.option
            .key(String(color.id))
            .attr("value", String(color.id))
            .disabled(color.isDisabled === true)
            .children(color.text)
        )
      )
})
