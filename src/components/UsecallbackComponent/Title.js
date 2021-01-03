import React from 'react';

const Title = () => {
    console.log("Rendering Title Component");
    
    return (
        <h2>
            useCallback Hook
        </h2>
    );
}
 
export default React.memo(Title);