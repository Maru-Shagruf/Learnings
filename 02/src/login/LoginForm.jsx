import { useState } from 'react';

function LoginForm() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    // 2. Check ID
    if (password.length < 5) {
      setErrorMessage(" Password is too short! Need 5 letters.");
    } else {
      setErrorMessage("");
      alert(" You are allowed in!");
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      <h1>Club Login</h1>
      
      <form onSubmit={handleSubmit}>
        <label>Password: </label>
        
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <p style={{ color: 'red' }}>{errorMessage}</p>

        <button type="submit">Enter Club</button>
      </form>
    </div>
  );
}

export default LoginForm;