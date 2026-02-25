import React, { useState, useEffect } from "react";

function ApiFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(result => {
          setData(result);
          setLoading(false);
        });
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <div>
      <h2>Dummy JSON Data</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map(user => (
          <p key={user.id}>{user.name}</p>
        ))
      )}
    </div>
  );
}

export default ApiFetch;