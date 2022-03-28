import { useState } from "react"
import Hello from "./Hello.jsx"

export default function App(){
    const [username, setUsername] = useState("John");

    function handleChange(event){
        setUsername(event.target.value)
    }

    return (
        <>
            <input value={username} onChange={handleChange} />
            <Hello name={username} />
        </>
    )
}