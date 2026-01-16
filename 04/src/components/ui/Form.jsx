import { useState } from 'react';

function Form() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
      alert("Login Success!");
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter password..."
        />
        <button type="submit">Login</button>
      </form>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Form;