import { createContext } from "react";

export interface User {
  name: string;
  age: number;
}

export const UserContext = createContext<User | undefined>(undefined);
