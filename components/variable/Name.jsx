export default function Name(){
    const [name, setName] = useState(0);
    setName("Jane")

    return <p>{name}</p>
}