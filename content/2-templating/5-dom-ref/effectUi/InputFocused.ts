import { Component } from "@effect/ui"
import { Html, HtmlCommand } from "@effect/ui/html"
import { Schema } from "effect"

const InputElement = Html.ref("InputElement", "input")

export const InputFocused = Html.component({
  name: "InputFocused",
  model: Schema.Null,
  message: Schema.Never
}).make({
  init: ($) =>
    $.set(null).run(HtmlCommand.focus(InputElement, () => Component.noop)),
  update: ($) => $.model,
  view: (h) => h.input.ref(InputElement).attr("type", "text")
})
