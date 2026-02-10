import { useFetch } from "./useFetch";

export function UserList() {
  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p> Loading Users...</p>;
  if (error) return <p style={{color:'red'}}> {error}</p>;

  // Check if users exists before mapping (safety check)
  if (!users) return null;

  return (
    <div style={{ border: "1px solid blue", padding: 10, margin: 10 }}>
      <h3>👤 User List</h3>
      <ul>
        {users.slice(0, 3).map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  );
}