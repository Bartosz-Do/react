import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                {count}
            </div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        </div>
    );
}

export default Counter;