import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="">Counter Application</h1>
      <h3>Counter Value = {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement Counter</button>
      <button onClick={() => setCounter(0)}>Reset Counter</button>
    </div>
  );
};

export default App;
