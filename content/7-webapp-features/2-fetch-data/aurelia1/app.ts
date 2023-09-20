import { autoinject, computedFrom } from "aurelia-framework";
import { UseFetchUsers } from "./UseFetchUsers";

@autoinject()
export class App {
  constructor(private useFetchUsers: UseFetchUsers) {
    this.useFetchUsers = useFetchUsers;
  }

  attached() {
    this.useFetchUsers.fetchData();
  }

  @computedFrom("useFetchUsers.data")
  get data() {
    return this.useFetchUsers.data;
  }

  @computedFrom("useFetchUsers.error")
  get error() {
    return this.useFetchUsers.error;
  }

  @computedFrom("useFetchUsers.isLoading")
  get isLoading() {
    return this.useFetchUsers.isLoading;
  }
}
