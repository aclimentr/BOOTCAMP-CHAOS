import { useState } from "react";

export default function Counter(){

    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count +1)
    }

    return (
    <div>
    {count}
    <button onClick={plus}>+</button>
    </div>
    )
}