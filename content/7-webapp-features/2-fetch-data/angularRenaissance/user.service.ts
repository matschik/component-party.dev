import { Injectable } from "@angular/core";
import { httpResource } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class UserService {
  readonly usersResource = httpResource<UserResponse>(
    () => "https://randomuser.me/api/?results=3",
  );
}

export interface UserResponse {
  results: User[];
  info: any;
}

export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
