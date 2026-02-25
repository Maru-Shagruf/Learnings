import React, { useState } from "react";
import Child from "./components/Child";

const App = () => {

  const [childMessage, setChildMessage] = useState("");

  const parentMessage = "Hello from Parent Component!";
  const handleChildData = (data) => {

    setChildMessage(() => data);
  };

  return (
    <div>
      <h2>Parent Component</h2>

      <p>
        <strong>Message sent to Child:</strong> {parentMessage}
      </p>
      <hr />

      <Child
        message={parentMessage}
        sendDataToParent={handleChildData}
      />

      <hr />

      <p>
        <strong>Message received from Child:</strong> {childMessage}
      </p>
    </div>
  );
};

export default App;