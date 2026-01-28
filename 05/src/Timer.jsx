import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log(" Timer Started");

   
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);


    return () => {
      console.log("Timer Cleaned Up");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ padding: 20, border: "1px solid blue" }}>
      <h2> Auto Timer</h2>
      <h1>{seconds}s</h1>
    </div>
  );
}

export default Timer;