import React, { useState } from "react";

const Child = ({ message, sendDataToParent }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
   
    sendDataToParent(inputValue);

   
    setInputValue("");
  };

  return (
    <div>
      <h3>Child Component</h3>

      <p>
        <strong>Message from Parent:</strong> {message}
      </p>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type message to parent"
      />

      <button onClick={handleSend}>
        Send to Parent
      </button>
    </div>
  );
};

export default Child;