import { useState, useRef } from 'react';

function Debounce() {
  const [text, setText] = useState("");
  const timer = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);


    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      console.log("Sent to API:", e.target.value);
    }, 1000);
  };

  return <input value={text} onChange={handleChange} placeholder="Type fast..." />;
}
export default Debounce;