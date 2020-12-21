import {useState, useEffect} from 'react';

const HookMouse = () => {
    const [position, setPosition] = useState({
        x: "",
        y: ""
    });

    const logMousePosition = (e) => {
        console.log("Mouse effect function");
        
        setPosition({
            ...position,
            x: e.clientX,
            y: e.clientY
        });
    }

    //ComponentDidMount - execute at first render
    // useEffect(() => {
    //     console.log("useffect call");

    //     window.addEventListener('mousemove', logMousePosition);
    // }, []);

    // ComponentWillUnmount - return when unmounting
    useEffect(() => {
        console.log("useffect call");

        window.addEventListener('mousemove', logMousePosition);

        //Execute when component unmount
        return () => {
            console.log("Component will unmount");
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []);

    return (
        <div>
            X - {position.x}
            Y - {position.y}
        </div>
    );
}
 
export default HookMouse;