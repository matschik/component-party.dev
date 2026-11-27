import { UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Schema } from "effect"

const TRAFFIC_LIGHTS = ["red", "orange", "green"] as const

const TrafficLightMessage = UiSchema.TaggedEnum({
  ClickedNextLight: {}
})

export const TrafficLight = Html.component({
  name: "TrafficLight",
  model: Schema.Struct({ lightIndex: Schema.Number }),
  message: TrafficLightMessage
}).make({
  init: () => ({ lightIndex: 0 }),
  update: {
    ClickedNextLight: ($) =>
      $.evolve({
        lightIndex: (index) => (index + 1) % TRAFFIC_LIGHTS.length
      })
  },
  view: (h, model) => {
    const light = TRAFFIC_LIGHTS[model.lightIndex]
    return h.div(
      h.button.on("click", TrafficLightMessage.ClickedNextLight())
        .children("Next light"),
      h.p(`Light is: ${light}`),
      h.p(
        "You must ",
        light === "red" && h.span("STOP"),
        light === "orange" && h.span("SLOW DOWN"),
        light === "green" && h.span("GO")
      )
    )
  }
})
