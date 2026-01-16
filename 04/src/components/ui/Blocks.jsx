// --- 1. Reusable Button ---
function MyButton({ label, onClick, color = "blue" }) {
  return (
    <button 
      onClick={onClick} 
      style={{ 
        backgroundColor: color, 
        color: "white", 
        padding: "5px 10px", 
        border: "none", 
        borderRadius: "5px" 
      }}
    >
      {label}
    </button>
  );
}

// --- 2. Reusable Input ---
function MyInput({ value, onChange, placeholder }) {
  return (
    <input 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      style={{ padding: "5px", border: "2px solid #ddd", borderRadius: "5px" }}
    />
  );
}

// --- 3. Using them together ---
import { useState } from 'react';

function Blocks() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h3>Reusable Components</h3>
      
      <MyInput 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type here..." 
      />
      
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <MyButton label="Save" onClick={() => alert("Saved: " + text)} />
        <MyButton label="Delete" onClick={() => setText("")} color="red" />
      </div>
    </div>
  );
}

export default Blocks;