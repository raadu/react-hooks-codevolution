import {useEffect} from 'react';

// Custom Hook
const useDocumentTitle = (count) => {

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count]);
}
 
export default useDocumentTitle;