import React, {useState, useEffect} from 'react';

function Counter({initialCount = 0, increment = 1, onChangeCount, name, ...rest}) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        onChangeCount(prev => ({ ...prev, [name]: count }));
    }, [count, onChangeCount, name]);
    
    const max = rest.max;
    const min = rest.min;
    return (
        <div>
            <div>
                {count} {count % 2 === 0 ? "parzysta" : "nieparzysta"}
            </div>
            <button disabled={count === max} onClick={() => setCount(prevCount => prevCount + increment)}>+</button>
            <button disabled={count === min} onClick={() => setCount(prevCount => prevCount - increment)}>-</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    );
}

export default Counter;