import { autoinject, computedFrom } from "aurelia-framework";
import { UseFetchUsers } from "./use-fetch-users";

@autoinject()
export class FetchData {
  constructor(
    private useFetchUsers: UseFetchUsers
  ) {
 }

  attached() {
    this.useFetchUsers.fetchData();
  }

  @computedFrom("useFetchUsers.data")
  get data() {
    if (!this.useFetchUsers) {
      return null;
    }
    return this.useFetchUsers.data;
  }

  @computedFrom("useFetchUsers.error")
  get error() {
    if (!this.useFetchUsers) {
      return null;
    }
    return this.useFetchUsers.error;
  }

  @computedFrom("useFetchUsers.isLoading")
  get isLoading() {
    if (!this.useFetchUsers) {
      return null;
    }
    return this.useFetchUsers.isLoading;
  }
}
