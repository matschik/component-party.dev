import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  error$: Subject<any> = new Subject();
  
  private users$ = this.HttpClient.get<{results: User[]; info: any}>('https://randomuser.me/api/?results=3')
  .pipe(
    map(x => x.results),
    catchError(e => {this.error$.next(e); return []})
  );
  
  constructor(private HttpClient: HttpClient) {}

  getUsers() {
    return this.users$;
  }

}
