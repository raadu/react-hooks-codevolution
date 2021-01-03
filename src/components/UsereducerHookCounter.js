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

const UsereducerHookCounter = () => {

    //useReducer returns newState and dispatch
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
}
 
export default UsereducerHookCounter;