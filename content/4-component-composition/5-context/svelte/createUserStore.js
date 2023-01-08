import { writable } from "svelte/store";

export default function createUserStore(initialData) {
  const userStore = writable(initialData);

  return {
    subscribe: userStore.subscribe,
    updateUsername(newUsername) {
      userStore.update((userData) => ({
        ...userData,
        username: newUsername,
      }));
    },
  };
}
