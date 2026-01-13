import { useState } from "react";
function Inputt() {
  const [text, setText] = useState("");

  return (
    <div style={{ marginTop: "20px" }}>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type here..." 
      />
      <p>You typed: <strong>{text}</strong></p>
    </div>
  );
}


export default Inputt;