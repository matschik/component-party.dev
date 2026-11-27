import { UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Schema } from "effect"

export const User = Schema.Struct({
  id: Schema.Number,
  username: Schema.String,
  email: Schema.String
})

export const UserProviderMessage = UiSchema.TaggedEnum({
  RequestedUsername: { username: Schema.String }
})

export const UserProviderEvents = UiSchema.TaggedEnum({
  RequestedUsername: { username: Schema.String }
})

export const UserProvider = Html.component({
  name: "UserProvider",
  props: Schema.Struct({ user: User }),
  model: Schema.Null,
  message: UserProviderMessage,
  events: UserProviderEvents,
  shares: {
    value: ({ props }) => props.user,
    receives: ["RequestedUsername"]
  }
}).make({
  init: () => null,
  update: {
    RequestedUsername: ($, { username }) =>
      $.emit(UserProviderEvents.RequestedUsername({ username }))
  }
})
