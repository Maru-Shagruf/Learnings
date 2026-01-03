function Greetings() {
  const time = "Morning"; 
  const userName = "Developer";

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Good {time}, {userName}!</h2>
      <p>Ready to learn React today!</p>
    </div>
  );
}

export default Greetings;