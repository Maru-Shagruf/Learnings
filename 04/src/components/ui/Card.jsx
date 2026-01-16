import { useState } from 'react';

function Card() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Secret Details</h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "▲" : "▼"}
        </button>
      </div>

      {isOpen && (
        <p style={{ background: "#f0f0f0", padding: "10px" }}>
          Here is the hidden content!
        </p>
      )}
    </div>
  );
}

export default Card;