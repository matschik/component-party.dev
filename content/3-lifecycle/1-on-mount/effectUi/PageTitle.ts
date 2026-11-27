import { Command, UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Effect, Schema } from "effect"

const PageTitleMessage = UiSchema.TaggedEnum({
  CompletedReadTitle: { title: Schema.String }
})

const ReadTitle = Command.make(
  "ReadTitle",
  { args: {} },
  () =>
    Effect.sync(() =>
      PageTitleMessage.CompletedReadTitle({ title: document.title })
    )
)

export const PageTitle = Html.component({
  name: "PageTitle",
  model: Schema.Struct({ pageTitle: Schema.String }),
  message: PageTitleMessage
}).make({
  init: ($) => $.set({ pageTitle: "" }).run(ReadTitle.make({})),
  update: {
    CompletedReadTitle: ($, { title }) => $.evolve({ pageTitle: title })
  },
  view: (h, model) => h.p(`Page title: ${model.pageTitle}`)
})
