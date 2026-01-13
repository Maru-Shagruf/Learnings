import { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button 
        onClick={() => setLiked(!liked)} 
        style={{ color: liked ? 'red' : 'gray', fontSize: '24px' }}
      >
        {liked ? " Liked" : " Like"}
      </button>
    </div>
  );
}

export default LikeButton;