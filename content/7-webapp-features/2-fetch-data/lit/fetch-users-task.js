import { Task } from "@lit/task";

export function createFetchUsersTask(element) {
  return new Task(element, {
    task: async () => {
      const response = await fetch("https://randomuser.me/api/?results=3");
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    },
    args: () => [],
  });
}
