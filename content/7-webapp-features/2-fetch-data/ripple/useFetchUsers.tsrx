import { RippleObject } from "ripple";

export function useFetchUsers() {
  const data = new RippleObject({
    isLoading: false,
    users: undefined,
    error: undefined,
  });

  async function fetchData() {
    data.isLoading = true;

    try {
      const response = await fetch("https://randomuser.me/api/?results=3");
      data.users = (await response.json()).results;
      data.error = undefined;
    } catch (err) {
      data.error = err;
      data.users = undefined;
    }

    data.isLoading = false;
  }

  fetchData();

  return data;
}
