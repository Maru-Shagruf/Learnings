import { useState } from 'react';

function LoginForm() {
  // The Memory (State)
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // The Bouncer (Validation Logic)
  const handleSubmit = (e) => {
    e.preventDefault(); // 1. Put the rock on the paper (Stop Refresh)

    // 2. Check ID
    if (password.length < 5) {
      setErrorMessage("⛔ Password is too short! Need 5 letters.");
    } else {
      setErrorMessage(""); // Clear error
      alert("✅ You are allowed in!");
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      <h1>Club Login</h1>
      
      <form onSubmit={handleSubmit}>
        <label>Password: </label>
        
        {/* The Mirror (Controlled Input) */}
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {/* The Red Sign (Conditional Rendering) */}
        <p style={{ color: 'red' }}>{errorMessage}</p>

        <button type="submit">Enter Club</button>
      </form>
    </div>
  );
}

export default LoginForm;