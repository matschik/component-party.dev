import {useState, useEffect} from "react"

export default function Time(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const timer = setInterval( () => {
        setTime(new Date().toLocaleTimeString())
     }, 1000);

    useEffect(() => {
        return () => {
            clearInterval(timer)
        }
    })

    return <p>Current time: {time}</p>
}