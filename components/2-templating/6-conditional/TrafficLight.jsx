import { useState, useMemo } from "react"

export default function TrafficLight(){
  const [trafficLights] = useState(["red", 'orange', "green"])

    const [lightIndex, setLightIndex] = useState(0)

    const light = useMemo(() => 
      
       trafficLights[lightIndex]
    , [lightIndex, trafficLights]);

    function nextLight(){
        if(lightIndex + 1 > trafficLights.length - 1){
            setLightIndex(0)
        } else {
            setLightIndex(lightIndex + 1)
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
    )
}