import React, { useState } from 'react';
import './index.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className='Counter1'>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button><br/>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
