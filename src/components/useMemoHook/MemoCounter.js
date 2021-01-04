import {useState, useMemo} from 'react';

const MemoCounter = () => {
    
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne+1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo+1);
    }

    //useMemo prevents other functionalitie to delay for long computing functions

    // Pass functions (as first argument) whose return value needs to be cached
    // Second argument is dependency.
    // useMemo returns a cached value
    const isEven = useMemo(() => {
        let i = 0;
        while(i<2000000000) {
            i++;
        }

        return counterOne%2 === 0;
    }, [counterOne]);

    // const isEven = () => {
    //     let i = 0;
    //     while(i<2000000000) {
    //         i++;
    //     }
    //     return counterOne%2 === 0;
    // }

    return (
        <div>
            <div>
                <button onClick={incrementOne}>
                    Count One - {counterOne}
                </button>
                <span>{isEven ? "Even" : "Odd"}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>
                    Count Two - {counterTwo}
                </button>
            </div>
        </div>
    );
}
 
export default MemoCounter;