import { $, component$, useStore } from "@builder.io/qwik";

export const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export const App = component$(() => {
  const store = useStore({
    lightIndex: 0,
  });

  const light = TRAFFIC_LIGHTS[store.lightIndex];

  const nextLight = $(() => {
    if (store.lightIndex + 1 > TRAFFIC_LIGHTS.length - 1) {
      store.lightIndex = 0;
    } else {
      store.lightIndex += 1;
    }
  });

  return (
    <>
      <button onClick$={nextLight}>Next light</button>
      <p>Light is: {light}</p>
      <p>
        You must
        {light === "red" && <span>STOP</span>}
        {light === "orange" && <span>SLOW DOWN</span>}
        {light === "green" && <span>GO</span>}
      </p>
    </>
  );
});
