import React, { useState, useRef } from "react";

function SearchInput() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setResult(value);
    }, 500);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleChange}
      />
      <h3>Search Result: {result}</h3>
    </div>
  );
}

export default SearchInput;