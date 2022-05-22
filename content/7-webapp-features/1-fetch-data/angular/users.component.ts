import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users$: Observable<User[]>

  constructor(public userService: UserService) {
    this.users$ = this.userService.getUsers();
  }
}
