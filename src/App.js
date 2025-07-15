import React from 'react';

function AddOne() {
  let value = parseInt(document.getElementById('counter').innerHTML);
  value++;

  document.getElementById('counter').innerHTML = value;
}

function SubOne() {
  let value = parseInt(document.getElementById('counter').innerHTML);
  value--;
  document.getElementById('counter').innerHTML = value;
}

function App() {
  return (
    <div>
      <div id={"counter"}>0</div>
      <button onClick={AddOne}>+</button>
      <button onClick={SubOne}>-</button>
    </div>
  )
}


export default App;
