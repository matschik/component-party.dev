import { $, component$, useComputed$, useSignal } from "@builder.io/qwik";

export const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export const TrafficLight = component$(() => {
  const lightIndex = useSignal(0);

  const light = useComputed$(() => TRAFFIC_LIGHTS[lightIndex.value]);

  const nextLight = $(() => {
    lightIndex.value = (lightIndex.value + 1) % TRAFFIC_LIGHTS.length;
  });

  return (
    <>
      <button onClick$={nextLight}>Next light</button>
      <p>Light is: {light.value}</p>
      <p>
        You must {light.value === "red" && <span>STOP</span>}
        {light.value === "orange" && <span>SLOW DOWN</span>}
        {light.value === "green" && <span>GO</span>}
      </p>
    </>
  );
});
