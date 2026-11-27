import { UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Schema } from "effect"
import { AnswerButton } from "./AnswerButton.ts"

const AppMessage = UiSchema.TaggedEnum({
  AnsweredYesAnswerButton: {},
  AnsweredNoAnswerButton: {}
})

export const App = Html.component({
  name: "App",
  model: Schema.Struct({ isHappy: Schema.Boolean }),
  message: AppMessage
}).make({
  init: () => ({ isHappy: true }),
  update: {
    AnsweredYesAnswerButton: ($) => $.evolve({ isHappy: true }),
    AnsweredNoAnswerButton: ($) => $.evolve({ isHappy: false })
  },
  view: (h, model) =>
    h.div(
      h.p("Are you happy?"),
      AnswerButton(h, {
        onEmit: {
          AnsweredYes: () => AppMessage.AnsweredYesAnswerButton(),
          AnsweredNo: () => AppMessage.AnsweredNoAnswerButton()
        }
      }),
      h.p.style({ fontSize: "50px" }).children(model.isHappy ? "😀" : "😥")
    )
})
