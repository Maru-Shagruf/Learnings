import { useFetch } from "./useFetch";

export function PostList() {
  // Using the SAME hook for a DIFFERENT URL
  const { data: posts, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>⏳ Loading Posts...</p>;
  if (error) return <p style={{color:'red'}}>⚠️ {error}</p>;

  return (
    <div style={{ border: "1px solid green", padding: 10, margin: 10 }}>
      <h3> Post List</h3>
      <ul>
        {posts.slice(0, 3).map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  );
}