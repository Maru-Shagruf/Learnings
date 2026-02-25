import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid =
    email.includes("@") && password.length >= 6;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!email.includes("@") && email && (
        <p>Email must contain @</p>
      )}

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {password.length < 6 && password && (
        <p>Password must be at least 6 characters</p>
      )}

      <Button disabled={!isValid}>Login</Button>
    </form>
  );
}
