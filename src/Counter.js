import React, {useState} from 'react';

function Counter({initialCount = 0, increment = 1}) {
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            <div>
                {count}
            </div>
            <button onClick={() => setCount(prevCount => prevCount + increment)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - increment)}>-</button>
        </div>
    );
}

export default Counter;