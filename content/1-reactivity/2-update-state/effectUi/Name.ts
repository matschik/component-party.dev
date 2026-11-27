import { Command, UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Effect, Schema } from "effect"

const NameMessage = UiSchema.TaggedEnum({
  CompletedRename: { name: Schema.String }
})

const Rename = Command.make(
  "Rename",
  { args: {} },
  () => Effect.succeed(NameMessage.CompletedRename({ name: "Jane" }))
)

export const Name = Html.component({
  name: "Name",
  model: Schema.Struct({ name: Schema.String }),
  message: NameMessage
}).make({
  init: ($) => $.set({ name: "John" }).run(Rename.make({})),
  update: {
    CompletedRename: ($, { name }) => $.evolve({ name })
  },
  view: (h, model) => h.h1(`Hello ${model.name}`)
})
