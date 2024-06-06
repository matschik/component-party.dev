import { NewElement, NewSignal } from "regular-framework/client";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export default () => {
  const lightIndex = NewSignal(0);
  return [
    NewElement(
      "button",
      {
        events(events) {
          if (events.type === "click") {
            lightIndex.value = (lightIndex.value + 1) % TRAFFIC_LIGHTS.length;
          }
        },
      },
      "Next Light"
    ),
    NewElement("p", {}, "Light is: ", () => TRAFFIC_LIGHTS[lightIndex.value]),
    NewElement("p", {}, "You must ", () => {
      switch (TRAFFIC_LIGHTS[lightIndex.value]) {
        case "red":
          return "STOP";
        case "orange":
          return "SLOW DOWN";
        case "green":
          return "GO";
      }
    }),
  ];
};
