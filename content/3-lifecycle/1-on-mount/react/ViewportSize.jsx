import { useState, useEffect } from "react";

export default function ViewportSize() {
  const [viewportSize, setViewportSize] = useState("");

  useEffect(() => {
    setViewportSize(`${window.innerWidth} × ${window.innerHeight}`);
  }, []);

  return <p>Viewport size: {viewportSize}</p>;
}
