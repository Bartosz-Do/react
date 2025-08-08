import React from 'react';
import Counter from './Counter';
import Timer from './Timer';


function App() {

  return (
    <div>
      <Counter />
      <Counter initialCount={10} max={20}/>
      <Counter increment={2} min={-12} />
      <Counter initialCount={-100} increment={20} max={100} min={-100} />
      <br />
      <Timer />
    </div>
  );
}

export default App;