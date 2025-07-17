import React from 'react';
import Counter from './Counter';


function App() {

  return (
    <div>
      <Counter />
      <Counter initialCount={10} />
      <Counter increment={2} />
      <Counter initialCount={-100} increment={20} />
    </div>
  );
}

export default App;