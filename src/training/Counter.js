import {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(1);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return <div>
        <h3>Counter {counter}</h3>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </div>
}

export default Counter;
