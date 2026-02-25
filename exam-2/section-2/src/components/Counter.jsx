import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1); 
    setShowWarning(false);
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount === 0) {
        setShowWarning(true);
        return prevCount;
      }
      setShowWarning(false);
      return prevCount - 1;
    });
  };

  const handleReset = () => {
    setCount(0);
    setShowWarning(false);
  };

  return (
    <center>
    <div className="counter-container">
        
      <h2>Counter Application</h2>
      <h1>{count}</h1>

      <div className="button-group">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {showWarning && (
          <p className="warning-message">
          Count cannot go below 0!
        </p>
      )}
    </div>
      </center>
  );
};

export default Counter;