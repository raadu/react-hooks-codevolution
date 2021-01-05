import React from 'react';
import useCounter from '../hooks/useCounter';

// useCounter custome hook used here
const CounterOne = () => {

    // useCounter 1st argument is initial value, 2nd is icrement/decrement number value
    const [count, increment, decrement, reset] = useCounter(0, 2);

    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
            <button onClick={() => reset()}>Reset</button>
        </div>
    );
}
 
export default CounterOne;