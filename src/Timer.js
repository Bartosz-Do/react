import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [time, setTime] = useState({min: 0, sec: 0, mil: 0});
    const [isRunning, setIsRunning] = useState(false);
    const [splitTime, setSplitTime] = useState([]);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prev => {
                    let newTime = { ...prev };

                    newTime.mil += 1;
                    if (newTime.mil >= 100) {
                        newTime.mil = 0;
                        newTime.sec += 1;
                    }
                    if (newTime.sec >= 60) {
                        newTime.sec = 0;
                        newTime.min += 1;
                    }

                    return newTime;
                });
            }, 10);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const formatTime = (timeObj) => {
        return `${timeObj.min.toString().padStart(2, '0')}:${timeObj.sec.toString().padStart(2, '0')}:${timeObj.mil.toString().padStart(2, '0')}`;
    };

    const handleClick = () => {
        setSplitTime(prev => {
            /*const newSplit = { ...time };
            let newElement = <p style={{color: "gray"}}>{`${newSplit.min.toString().padStart(2, '0')}:${newSplit.sec.toString().padStart(2, '0')}:${newSplit.mil.toString().padStart(2, '0')}`}</p>;
            return [newElement, ...prev];*/
            return [time, ...prev];
        });
    };

    return (
        <>
            <p>Timer</p>
            <p>{formatTime(time)}</p>
            <button onClick={() => setIsRunning(prev => !prev)}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={() => {setTime({min: 0, sec: 0, mil: 0}); setSplitTime([]);}}>Reset</button> <br />
            <button onClick={handleClick}>split</button>
            <div style={{color: 'gray'}}>
                {splitTime.map((value, index) => {
                    return (
                        <p style={{color: 'gray'}} key={index}>
                            {formatTime(value)}
                        </p>
                    );
                })}
            </div>
        </>
    );
}