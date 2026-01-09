import { useState, useRef } from 'react';

function Search() {
  const [text, setText] = useState("");
  
  // 1. The Secret Pocket (Holds the Timer ID)
  // We use this because we don't want the screen to flash every time we set a timer.
  const timerRef = useRef(null);

  const performSearch = (query) => {
    console.log("🔥 SENT TO SERVER:", query);
    // This is where your API call goes
  };
  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    // 2. The Waiter Logic
    // "Is there a waiter already running to the kitchen?"
    if (timerRef.current) {
      clearTimeout(timerRef.current); // "STOP! Don't go yet!"
    }

    // "Start a new timer. If I don't speak for 1 second, GO."
    timerRef.current = setTimeout(() => {
      performSearch(newText);
    }, 1000); 
  };

  return (
    <div style={{ padding: '50px' }}>
      <h2>Debounced Search</h2>
      <p>Open Console (F12) to see the magic.</p>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type here..." 
      />
    </div>
  );
}

export default Search;