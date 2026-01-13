import { useState } from 'react';

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <input 
        type={showPassword ? "text" : "password"} 
        placeholder="Enter password..."
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? " Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordInput;