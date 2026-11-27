import { UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Schema } from "effect"

const AnswerButtonMessage = UiSchema.TaggedEnum({
  ClickedYes: {},
  ClickedNo: {}
})

export const AnswerButtonEvents = UiSchema.TaggedEnum({
  AnsweredYes: {},
  AnsweredNo: {}
})

export const AnswerButton = Html.component({
  name: "AnswerButton",
  model: Schema.Null,
  message: AnswerButtonMessage,
  events: AnswerButtonEvents
}).make({
  init: () => null,
  update: {
    ClickedYes: ($) => $.emit(AnswerButtonEvents.AnsweredYes()),
    ClickedNo: ($) => $.emit(AnswerButtonEvents.AnsweredNo())
  },
  view: (h) =>
    h.div(
      h.button.on("click", AnswerButtonMessage.ClickedYes()).children("YES"),
      h.button.on("click", AnswerButtonMessage.ClickedNo()).children("NO")
    )
})
