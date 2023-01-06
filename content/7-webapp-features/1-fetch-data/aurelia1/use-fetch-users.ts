export class UseFetchUsers {
  data = null;
  error = null;
  isLoading = false;

  async fetchData() {
    this.isLoading = true;
    try {
      const response = await fetch("https://randomuser.me/api/?results=3");
      const { results: users } = await response.json();
      this.data = users;
      this.error = null;
    } catch (err) {
      this.data = null;
      this.error = err;
    }
    this.isLoading = false;
  }
}
