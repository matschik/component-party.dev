import { Query } from "@effect/ui"
import { Effect, Schema } from "effect"
import { HttpClient, HttpClientResponse } from "effect/http"

const User = Schema.Struct({
  login: Schema.Struct({ uuid: Schema.String }),
  name: Schema.Struct({ first: Schema.String, last: Schema.String }),
  picture: Schema.Struct({ thumbnail: Schema.String })
})

export class FetchUsersError extends Schema.TaggedError<FetchUsersError>()(
  "FetchUsersError",
  {}
) {}

export class FetchUsers extends Query.Service<FetchUsers>()("FetchUsers", {
  success: Schema.Array(User),
  error: FetchUsersError,
  staleTime: "5 minutes"
}) {
  static readonly layer = this.toLayer(
    Effect.gen(function*() {
      const client = yield* HttpClient.HttpClient
      return () =>
        client.get("https://randomuser.me/api/?results=3").pipe(
          Effect.flatMap(
            HttpClientResponse.schemaBodyJson(
              Schema.Struct({ results: Schema.Array(User) })
            )
          ),
          Effect.map(({ results }) => results),
          Effect.mapError(() => new FetchUsersError())
        )
    })
  )
}
