export default function useFetchUsers() {
  const users = $state();
  const error = $state();
  const isLoading = $state(false);

  async function fetchData() {
    isLoading = true;
    try {
      const response = await fetch("https://randomuser.me/api/?results=3");
      users = (await response.json()).results;
      error = undefined;
    } catch (err) {
      error = err;
      users = undefined;
    }
    isLoading = false;
  }
  fetchData();

  return {
    get isLoading() {
      return isLoading;
    },
    get error() {
      return error;
    },
    get users() {
      return users;
    },
  };
}
