import { Html } from "@effect/ui/html"
import { Schema } from "effect"
import { FunnyButton } from "./FunnyButton.ts"

export const App = Html.component({
  name: "App",
  model: Schema.Null,
  message: Schema.Never
}).make({
  init: () => null,
  update: ($) => $.model,
  view: (h) =>
    h.div(
      FunnyButton(h),
      FunnyButton(h, { children: ["I got content!"] })
    )
})
