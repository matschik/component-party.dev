export default async function fetchUsers() {
  const response = await fetch("https://randomuser.me/api/?results=3");
  const { results: users } = await response.json();
  return users;
}
