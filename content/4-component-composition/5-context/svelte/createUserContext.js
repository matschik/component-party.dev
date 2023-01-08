import { writable } from "svelte/store";

export default function createUserContext(initialData) {
  const userStore = writable(initialData);

  return {
    subscribe: userStore.subscribe,
    updateEmail(newEmail) {
      userStore.update((userData) => ({
        ...userData,
        email: newEmail,
      }));
    },
  };
}
