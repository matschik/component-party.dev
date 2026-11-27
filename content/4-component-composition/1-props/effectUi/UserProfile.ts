import { Html } from "@effect/ui/html"
import { Schema } from "effect"

export const UserProfile = Html.component({
  name: "UserProfile",
  props: Schema.Struct({
    name: Schema.String,
    age: Schema.NullOr(Schema.Number),
    favouriteColors: Schema.Array(Schema.String),
    isAvailable: Schema.Boolean
  }),
  model: Schema.Null,
  message: Schema.Never
}).make({
  init: () => null,
  update: ($) => $.model,
  view: (h) => {
    const { name, age, favouriteColors, isAvailable } = h.props
    return h.div(
      h.p(`My name is ${name}!`),
      h.p(`My age is ${age}!`),
      h.p(`My favourite colors are ${favouriteColors.join(", ")}!`),
      h.p(`I am ${isAvailable ? "available" : "not available"}`)
    )
  }
})
