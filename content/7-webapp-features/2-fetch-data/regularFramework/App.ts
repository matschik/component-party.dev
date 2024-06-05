import { NewElement, NewSignal } from "regular-framework/client";

const NewResource = <T>(
  url: URL,
  action = async (v: Response): Promise<T> => v as T
) => {
  type State = "loading" | "loaded" | "error";
  const state = NewSignal<State>("loading");
  const resource = NewSignal<T>(undefined);

  (async () => {
    const response = await fetch(url.href);
    if (response.ok) {
      resource.value = (await action(response)) as T;
      state.value = "loaded";
    } else {
      state.value = "error";
    }
  })();
  return {
    state,
    resource,
  };
};

export default () => {
  const data = NewResource<
    Array<{
      picture: { thumbnail: string };
      name: { first: string; last: string };
    }>
  >(
    new URL("https://randomuser.me/api/?results=3"),
    async (res) => await res.json()
  );
  return NewElement("ul", {}, () => {
    switch (data.state.value) {
      case "loading":
        return NewElement("p", {}, "Fetching users...");
      case "loaded":
        return data.resource.value.map((user: any) =>
          NewElement(
            "li",
            {},
            NewElement("img", { src: user.picture.thumbnail }),
            NewElement("p", {}, user.name.first, " ", user.name.last)
          )
        );
      case "error":
        return NewElement("p", {}, "An error occurred while fetching users");
    }
  });
};
