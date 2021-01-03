import React from 'react';

const Count = ({text, count}) => {
    console.log(`Rendering Count Component - ${text}`);
    
    return (
        <div>
            {text} - {count}
        </div>
    );
}
 
export default React.memo(Count);