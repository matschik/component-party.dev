import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

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

export default class App extends Component {
  fetchUsers = () => getUsers();

  <template>
    {{#let (this.fetchUsers) as |request|}}
      {{#if request.isLoading}}
        <p>Fetching users...</p>
      {{else if request.error}}
        <p>An error occurred while fetching users</p>
      {{else}}
        <ul>
          {{#each request.data as |user|}}
            <li>
              <img src={{user.picture.thumbnail}} alt="user" />
              <p>{{user.name.first}} {{user.name.last}}</p>
            </li>
          {{/each}}
        </ul>
      {{/if}}
    {{/let}}
  </template>
}