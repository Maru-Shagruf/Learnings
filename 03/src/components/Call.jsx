import { useState, useCallback } from 'react';

function Call() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []); 

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <button onClick={handleClick}>Log Click</button>
    </div>
  );
}
export default Call;