import { writable } from "svelte/store";

export default function useFetchUsers() {
  const data = writable();
  const error = writable();
  const isLoading = writable(false);

  async function fetchData() {
    isLoading.set(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=3");
      const { results: users } = await response.json();
      data.set(users);
      error.set();
    } catch (err) {
      data.set();
      error.set(err);
    }
    isLoading.set(false);
  }
  fetchData();

  return { isLoading, error, data };
}
