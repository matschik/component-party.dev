import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
}
