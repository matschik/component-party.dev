import { Html } from "@effect/ui/html"
import { Schema } from "effect"
import "./style.css"

export const CssStyle = Html.component({
  name: "CssStyle",
  model: Schema.Null,
  message: Schema.Never
}).make({
  init: () => null,
  update: ($) => $.model,
  view: (h) =>
    h.div(
      h.h1.class("title").children("I am red"),
      h.button.style({ fontSize: "10rem" }).children("I am a button")
    )
})
