import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Component({
  selector: "app-users",
  template: `
    <ng-container *ngIf="userService.state$ | async as vm">
      <div *ngIf="vm.loading; else errorTpl">Fetching users...</div>

      <ng-template #errorTpl>
        <p *ngIf="vm.error; else usersListTpl">
          An error occurred while fetching users
        </p>
      </ng-template>

      <ng-template #usersListTpl>
        <ul *ngIf="vm.users.length > 0">
          <li *ngFor="let user of users">
            <img [src]="user.picture.thumbnail" alt="user" />
            <p>{{ user.name.first }} {{ user.name.last }}</p>
          </li>
        </ul>
      </ng-template>
    </ng-container>
  `,
})
export class UsersComponent {
  constructor(public userService: UserService) {
    this.userService.loadUsers();
  }
}
