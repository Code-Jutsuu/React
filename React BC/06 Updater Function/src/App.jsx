import React, { useState } from 'react'


const App = () => {

  const[count, setCount] = useState(0);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1); // This will be called twice
  };
  const reset = () => {
    setCount(0) // prevCount
  }
  const increment = () => {
    setCount(c => c + 1) // prevCount
    setCount(c => c + 1)
    setCount(c =>c + 1)
  }
  

  return (
    <div className='container'>

      <h1>Counter Program </h1>
      <h3>with</h3>
      <h1>Updater Function</h1>
      <div>
        <p style={{ fontSize: '3rem' }}>{count}</p><br />
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}  >Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
 
    </div>
  )

}
export default App
