import  React, { useState } from 'react';

function CountersX(props) { 

    const [val, setVal] = useState(props.val);
    const [lx, setLx] = useState(10);
    const onIncrement = () => {
        setVal(val + 1);
        setLx(lx + 1);
    }

    
    return (
        <div>
            <p>Counters value : {val}</p>
            <p>lx value : {lx}</p>
            <button onClick={onIncrement}>Increment</button>
        </div>
    );
}

export default CountersX;