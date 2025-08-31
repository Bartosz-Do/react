import React, {useState, useEffect} from 'react';
import style from './styles/Counter.module.css';

function Counter({initialCount = 0, increment = 1, onChangeCount, name, ...rest}) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        onChangeCount(prev => ({ ...prev, [name]: count }));
    }, [count, onChangeCount, name]);
    
    const max = rest.max;
    const min = rest.min;
    return (
        <div className={style.div}>
            <div className={count >= 0 ? style.dodatnia : style.ujemna}>
                {count} {count % 2 === 0 ? "parzysta" : "nieparzysta"}
            </div>
            <button className={`${style.dodac} ${style.div}`} disabled={count === max} onClick={() => setCount(prevCount => prevCount + increment)}>+</button>
            <button className={`${style.odjac} ${style.div}`} disabled={count === min} onClick={() => setCount(prevCount => prevCount - increment)}>-</button>
            <button className={`${style.reset} ${style.div}`} onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    );
}

export default Counter;