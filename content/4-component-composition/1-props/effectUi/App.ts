import { Html } from "@effect/ui/html"
import { Schema } from "effect"
import { UserProfile } from "./UserProfile.ts"

export const App = Html.component({
  name: "App",
  model: Schema.Null,
  message: Schema.Never
}).make({
  init: () => null,
  update: ($) => $.model,
  view: (h) =>
    UserProfile(h, {
      props: {
        name: "John",
        age: 20,
        favouriteColors: ["green", "blue", "red"],
        isAvailable: true
      }
    })
})
