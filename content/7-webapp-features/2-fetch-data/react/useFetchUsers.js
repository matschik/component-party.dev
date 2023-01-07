import { useEffect, useState } from "react";

export default function useFetchUsers() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch("https://randomuser.me/api/?results=3");
        const { results: users } = await response.json();
        setData(users);
        setError();
      } catch (err) {
        setData();
        setError(err);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return { isLoading, error, data };
}
