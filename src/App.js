import React, {useState, useEffect} from 'react';
import Counter from './Counter';
import Timer from './Timer';


function App() {

  const [count, setCount] = useState({});

  const [sumOfAllCounters, setSumOfAllCounters] = useState(0);

  useEffect(() => {
    setSumOfAllCounters(0);
    for (let key in count) {
      setSumOfAllCounters(prev => prev + count[key]);
    }
  }, [count]);

  return (
    <div>
      Total count: {sumOfAllCounters}
      <Counter onChangeCount={setCount} name="counter1" />
      <Counter initialCount={10} max={20} onChangeCount={setCount} name="counter2" />
      <Counter increment={2} min={-12} onChangeCount={setCount} name="counter3" />
      <Counter initialCount={-100} increment={20} max={100} min={-100} onChangeCount={setCount} name="counter4" />
      <br />
      <Timer />
    </div>
  );
}

export default App;