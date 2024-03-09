import { Model } from "@dlightjs/dlight";

@Model
class FetchUsers {
  data = [];
  error = null;
  loading = false;

  async willMount() {
    this.loading = true;
    try {
      const response = await fetch("https://randomuser.me/api/?results=3");
      const { results } = await response.json();
      this.data = results;
      this.error = null;
    } catch (err) {
      this.data = null;
      this.error = err;
    }
    this.loading = false;
  }
}

export default FetchUsers;
