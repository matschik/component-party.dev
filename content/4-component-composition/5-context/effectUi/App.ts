import { UiSchema } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Schema } from "effect"
import { UserProfile } from "./UserProfile.ts"
import { User, UserProvider } from "./UserProvider.ts"

const AppMessage = UiSchema.TaggedEnum({
  RequestedUsernameUserProvider: { username: Schema.String }
})

export const App = Html.component({
  name: "App",
  model: Schema.Struct({ user: User }),
  message: AppMessage
}).make({
  init: () => ({
    user: { id: 1, username: "unicorn42", email: "unicorn42@example.com" }
  }),
  update: {
    RequestedUsernameUserProvider: ($, { username }) =>
      $.evolve({ user: (user) => ({ ...user, username }) })
  },
  view: (h, model) =>
    h.div(
      h.h1(`Welcome back, ${model.user.username}`),
      UserProvider(h, {
        props: { user: model.user },
        onEmit: {
          RequestedUsername: ({ username }) =>
            AppMessage.RequestedUsernameUserProvider({ username })
        },
        view: () => UserProfile(h, {})
      })
    )
})
