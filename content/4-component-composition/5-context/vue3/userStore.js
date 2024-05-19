import { ref } from "vue";
export const user = ref({
  id: 1,
  username: "unicorn42",
  email: "unicorn42@example.com",
});


export function updateUsername(username) {
  user.value.username = username;
}
