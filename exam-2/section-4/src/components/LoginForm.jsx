import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid =
    email.includes("@") && password.length >= 6;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!email.includes("@") && email && (
        <p>Email must contain @</p>
      )}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {password.length < 6 && password && (
        <p>Password must be at least 6 characters</p>
      )}

      <button disabled={!isValid}>Login</button>
    </form>
  );
}
