export interface UsersState {
  state: "loading" | "loaded" | "error";
  data: User[];
  error?: string;
}

export const initialState: UsersState = {
  state: "loading",
  data: [],
};

export interface UserResponse {
  results: User[];
  info: any;
}

export interface User {
  id: string;
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
