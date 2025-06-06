import { useState, useEffect } from "react";

export interface User {
  id: number;
  name: string;
}

interface FetchUsersResult {
  users: User[];
  isLoading: boolean;
  error: Error | null;
}

export function useFetchUsers(): FetchUsersResult {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (e) {
        setError(e as Error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return { users, isLoading, error };
}
