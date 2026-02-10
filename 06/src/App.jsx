import { UserList } from "./UserList.jsx";
import { PostList } from "./PostList.jsx";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Custom Hook Demo</h1>
      <p>Logic is defined ONCE, used TWICE.</p>
      
      <UserList />
      <PostList />
    </div>
  );
}