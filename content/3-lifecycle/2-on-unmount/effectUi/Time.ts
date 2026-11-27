import { Subscription, UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Duration, Schema, Stream } from "effect"

const TimeMessage = UiSchema.TaggedEnum({
  Ticked: { time: Schema.String }
})

const now = () => new Date().toLocaleTimeString()

export const Time = Html.component({
  name: "Time",
  model: Schema.Struct({ time: Schema.String }),
  message: TimeMessage
}).make({
  init: () => ({ time: now() }),
  update: {
    Ticked: ($, { time }) => $.evolve({ time })
  },
  subscriptions: () => [
    Subscription.make(
      "clock",
      Stream.tick(Duration.seconds(1)).pipe(
        Stream.map(() => TimeMessage.Ticked({ time: now() }))
      )
    )
  ],
  view: (h, model) => h.p(`Current time: ${model.time}`)
})
