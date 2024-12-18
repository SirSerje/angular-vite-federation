const ListComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1);
            }}>Click</button>
            <h1>{count}</h1>
        </div>
    );
}
export  {ListComponent};