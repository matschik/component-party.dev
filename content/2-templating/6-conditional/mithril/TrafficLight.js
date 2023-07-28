import m from "mithril";
const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export default function TrafficLight() {
  let lightIndex = 0;
  let currentLight = () => TRAFFIC_LIGHTS[lightIndex];

  const nextLight = () => (lightIndex + 1) % TRAFFIC_LIGHTS.length;

  const instructions = () => {
    switch (currentLight()) {
      case "red":
        return "STOP";
      case "orange":
        return "SLOW DOWN";
      case "green":
        return "GO";
    }
  };

  return {
    view: () =>
      m(
        "div",
        m("button", { onclick: nextLight }, "Next light"),
        m("p", `Light is: ${currentLight()}`),
        m("p", "You must ", m("span", instructions()))
      ),
  };
}
