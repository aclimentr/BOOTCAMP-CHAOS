import { useState } from "react";

export default function Counter() {
//   let count = 0;
  const [count, setCount] = useState(0);

  const plus = () => {
    // count++
    setCount(count + 1)
  };

  return (
    <div>
      {count}
      <button onClick={plus}>+</button>
    </div>
  );
}
