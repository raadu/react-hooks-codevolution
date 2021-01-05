import {useState, useEffect} from 'react';

const DocTitleTwo = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count+1)}>
                Count - {count}
            </button>
        </div>
    );
}
 
export default DocTitleTwo;