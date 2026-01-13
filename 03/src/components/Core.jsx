import { useState } from 'react';

// --- CHILD COMPONENT (Task 1: Small Component) ---
function ChildInput({ onNameChange }) {
  // Task 4: Controlled Input (Local state for the input box)
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setText(newValue);
    
    // Task 3: Child -> Parent Communication
    // We call the function the Parent gave us to send data UP.
    onNameChange(newValue); 
  };

  return (
    <div style={{ border: "1px dashed gray", padding: "10px", margin: "10px 0" }}>
      <h4>👶 I am the Child</h4>
      <input 
        value={text} 
        onChange={handleChange} 
        placeholder="Type name here..." 
      />
    </div>
  );
}

// --- PARENT COMPONENT ---
function CoreMastery() {
  // Task 2: Counter App State
  // "Lazy State" example: This console log only runs ONCE, even if you click buttons.
  const [count, setCount] = useState(() => {
    console.log("⚡ System Initialized");
    return 0;
  });

  const [userName, setUserName] = useState("Guest");

  // Task 2: Functional Updates
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  // This function will be passed DOWN to the child
  const handleChildData = (nameFromChild) => {
    setUserName(nameFromChild);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🎓 React Core Refresher</h1>

      {/* SECTION 1: COUNTER */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Counter: {count}</h3>
        <button onClick={decrement}>-</button>
        <button onClick={reset} style={{ margin: "0 10px" }}>Reset</button>
        <button onClick={increment}>+</button>
      </div>

      <hr />

      {/* SECTION 2: PARENT-CHILD FLOW */}
      <div>
        <h3>👨 I am the Parent</h3>
        <p>Hello, <strong>{userName || "..."}</strong>!</p>
        
        {/* Pass the function down so Child can call it */}
        <ChildInput onNameChange={handleChildData} />
      </div>
    </div>
  );
}

export default CoreMastery;