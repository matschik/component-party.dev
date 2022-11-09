import { useState } from "react";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export default function TrafficLight() {
  const [lightIndex, setLightIndex] = useState(0);

  const light = TRAFFIC_LIGHTS[lightIndex];

  function nextLight() {
    if (lightIndex + 1 > TRAFFIC_LIGHTS.length - 1) {
      setLightIndex(0);
    } else {
      setLightIndex(lightIndex + 1);
    }
  }

  return (
    <>
      <button onClick={nextLight}>Next light</button>
      <p>Light is: {light}</p>
      <p>
        You must
        {light === "red" && <span>STOP</span>}
        {light === "orange" && <span>SLOW DOWN</span>}
        {light === "green" && <span>GO</span>}
      </p>
    </>
  );
}
