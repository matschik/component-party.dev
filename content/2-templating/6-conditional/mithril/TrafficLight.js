import m from 'mithril'
const TRAFFIC_LIGHTS = ["red", "orange", "green"];

const TrafficLight = () => {
  let lightIndex = 0
  let light = () => TRAFFIC_LIGHTS[lightIndex];

  const nextLight = () =>
    lightIndex + 1 > TRAFFIC_LIGHTS.length - 1
      ? lightIndex = 0
      : lightIndex = lightIndex + 1


  const instructions = () => {
    switch (light()) {
      case 'red': return 'STOP'
      case 'orange': return 'SLOW DOWN'
      case 'green': return 'GO'
    }
  }

  return {
    view: () => m('',
      m('button', { onclick: nextLight }, 'Next light'),
      m('p', `Light is: ${light()}`),
      m('p', 'You must ', m('span', instructions()))
    )
  }
}
