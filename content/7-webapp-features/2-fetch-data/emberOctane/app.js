import { tracked } from "@glimmer/tracking";
import Component from "@glimmer/component";

export default class App extends Component {
  fetchUsers = () => getUsers();
}

class State {
  @tracked isLoading = false;
  @tracked error = null;
  @tracked data = null;
}

function getUsers() {
  let state = new State();

  async function fetchData() {
    state.isLoading = true;

    try {
      let response = await fetch("https://randomuser.me/api/?results=3");
      let { results: users } = await response.json();
      state.data = users;
      state.error = null;
    } catch (err) {
      state.data = null;
      state.error = err;
    }

    state.isLoading = false;
  }

  fetchData();

  return state;
}

// NOTE: in Polaris, the backing class for the component isn't needed at all.
// `getUsers` could be invoked directly.
