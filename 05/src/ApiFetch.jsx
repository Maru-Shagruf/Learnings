import { useState, useEffect } from "react";

function ApiFetch() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes?limit=5");
        
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setUsers(result.quotes); 

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <h3>Loading Users...</h3>;
  if (error) return <h3 style={{ color: "red" }}> Error: {error}</h3>;

  return (
    <div style={{ padding: 20, border: "1px solid #ccc" }}>
      <h2>Quotes List (DummyJSON)</h2>
      <ul>
        {users.map((item) => (
  <li key={item.id}>
    "{item.quote}" — <strong>{item.author}</strong>
  </li>
))}
      </ul>
    </div>
  );
}

export default ApiFetch;