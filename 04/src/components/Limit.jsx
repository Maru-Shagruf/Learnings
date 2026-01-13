import { useState } from 'react';

function TweetBox() {
  const [text, setText] = useState("");
  const limit = 10;

  return (
    <div style={{ padding: "20px" }}>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
      />
      
      <p style={{ color: text.length > limit ? 'red' : 'black' }}>
        Characters: {text.length} / {limit}
      </p>

      {text.length > limit && <span>Too long!</span>}
    </div>
  );
}

export default TweetBox;