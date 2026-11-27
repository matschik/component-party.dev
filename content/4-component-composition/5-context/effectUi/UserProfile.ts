import { UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Schema } from "effect"
import { UserProvider, UserProviderMessage } from "./UserProvider.ts"

const UserProfileMessage = UiSchema.TaggedEnum({
  ClickedUpdateUsername: {}
})

export const UserProfile = Html.component({
  name: "UserProfile",
  model: Schema.Null,
  message: UserProfileMessage,
  reads: { provider: UserProvider }
}).make({
  init: () => null,
  update: {
    ClickedUpdateUsername: ($) =>
      $.send(
        UserProvider,
        UserProviderMessage.RequestedUsername({ username: "Jane" })
      )
  },
  view: (h) =>
    h.div(
      h.h2("My Profile"),
      h.p(`Username: ${h.reads.provider.username}`),
      h.p(`Email: ${h.reads.provider.email}`),
      h.button
        .on("click", UserProfileMessage.ClickedUpdateUsername())
        .children("Update username to Jane")
    )
})
