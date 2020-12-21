import { useState } from "react";

// useState Hooks with previous state
const HookCounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incFive = () => {
        for(let i=0; i<5; i++) {
            //Pass previous state value
            setCount(prevCount => prevCount+1);
        }
    }

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(prevCount => prevCount+1)}>Increase</button>
      <button onClick={() => setCount(prevCount => prevCount-1)}>Decrease</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={incFive}>Increment Five</button>

    </div>
  );
};

export default HookCounterTwo;
