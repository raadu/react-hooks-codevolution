import {useReducer} from 'react';

const initialState = 0;

const reducer = (currentState, action) => {
    
    //switch through actions and manipulate state
    switch(action) {
        case "increment":
            return currentState+1;
        case "decrement": 
            return currentState-1;
        case "reset":
            return initialState;
        default: 
            return currentState;
    }
}

//useReducer hooks example where multiple objects are used
const UsereducerHookCounterThree = () => {

    //useReducer returns newState and dispatch
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                <div>Count - {count}</div>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </div>

            <div>
                <div>Count - {count2}</div>
                <button onClick={() => dispatch2('increment')}>Increment</button>
                <button onClick={() => dispatch2('decrement')}>Decrement</button>
                <button onClick={() => dispatch2('reset')}>Reset</button>
            </div>
        </div>
    );
}
 
export default UsereducerHookCounterThree;