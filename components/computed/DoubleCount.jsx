export default function DoubleCount(){
    const [count] = useState(0);
    const doubleCount = useMemo(() => count * 2, [count]);

    return <p>{doubleCount}</p>
}