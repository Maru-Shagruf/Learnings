import { useState } from 'react';

// 1. Receive the prop (Destructuring)
function LikeButton({ startCount }) {
  
  // 2. Initialize State using that prop
  // This is the key step: State starts at whatever number passed in
  const [likes, setLikes] = useState(startCount);

  const handleClick = () => {
    // 3. Update state immutably
    setLikes(likes + 1);
  };

  return (
    <button 
      onClick={handleClick}
      style={{ padding: '10px 20px', fontSize: '1.2rem', cursor: 'pointer' }}
    >
      {/* 4. Display the dynamic state */}
      ❤️ Likes: {likes}
    </button>
  );
}

export default LikeButton;