import React, { useState } from 'react';


function App() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <div>
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;