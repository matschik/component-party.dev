import { Component } from "@effect/ui"
import { Html } from "@effect/ui/html"
import { Layer, Schema } from "effect"
import { FetchHttpClient } from "effect/http"
import { AsyncResult } from "effect/reactivity"
import { FetchUsers } from "./FetchUsers.ts"

export const App = Html.component({
  name: "App",
  model: Schema.Null,
  message: Schema.Never,
  queries: { users: { query: FetchUsers, args: () => ({}) } }
}).make({
  init: () => null,
  update: ($) => $.model,
  view: (h) =>
    AsyncResult.match(h.queries.users, {
      onInitial: () => h.p("Fetching users..."),
      onFailure: () => h.p("An error occurred while fetching users"),
      onSuccess: ({ value: users }) =>
        h.ul(
          users.map((user) =>
            h.li.key(user.login.uuid).children(
              h.img.attrs({ src: user.picture.thumbnail, alt: "user" }),
              h.p(`${user.name.first} ${user.name.last}`)
            )
          )
        )
    })
}).pipe(
  Component.provide(FetchUsers.layer.pipe(Layer.provide(FetchHttpClient.layer)))
)
