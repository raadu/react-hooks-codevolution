import {useState, useEffect, useRef} from 'react';

const HookTimer = () => {

    const [timer, setTimer] = useState(0);
    
    //useRef can hold any mutable values
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer+1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };

    }, []);

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>
                Clear Hook Timer
            </button>
        </div>
    );
}
 
export default HookTimer;