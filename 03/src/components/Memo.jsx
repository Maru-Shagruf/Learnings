import { useState, useMemo } from 'react';

function Memo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // 1. Only runs this slow math when 'number' changes.
  // changing 'dark' (color) will NOT trigger this log.
  const doubleNumber = useMemo(() => {
    console.log("⚠️ Running Slow Math...");
    return number * 2;
  }, [number]); 

  return (
    <div>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <div style={{ color: dark ? 'white' : 'black', background: dark ? 'black' : 'white' }}>
        Result: {doubleNumber}
      </div>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}
export default Memo;