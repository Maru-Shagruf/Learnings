import { useState } from 'react';

function Spoiler() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ padding: "20px", border: "1px solid orange" }}>
      <h3>Movie Spoiler</h3>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Spoiler" : "Show Spoiler"}
      </button>
      {isVisible && (
        <p style={{ background: "yellow", padding: "10px" }}>
           The main character is actually a ghost!
        </p>
      )}
    </div>
  );
}

export default Spoiler;