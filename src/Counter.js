import React, {useState} from 'react';

function Counter({initialCount = 0, increment = 1, ...rest}) {
    const [count, setCount] = useState(initialCount);
    
    const max = rest.max;
    const min = rest.min;
    return (
        <div>
            <div>
                {count} {count % 2 === 0 ? "parzysta" : "nieparzysta"}
            </div>
            <button disabled={count === max} onClick={() => setCount(prevCount => prevCount + increment)}>+</button>
            <button disabled={count === min} onClick={() => setCount(prevCount => prevCount - increment)}>-</button>
        </div>
    );
}

export default Counter;