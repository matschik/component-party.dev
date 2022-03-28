import {useState} from "react"

export default function Name(){
    const [name, setName] = useState(0);
    setName("Jane")

    console.log(name)
}