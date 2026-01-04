import { useState } from 'react';

// Sibling 1: The Switch
function LightSwitch({ toggle }) {
  return <button onClick={toggle}>Toggle Light</button>;
}

// Sibling 2: The Bulb
function LightBulb({ isOn }) {
  return <div style={{ background: isOn ? 'yellow' : 'gray', height: '50px', width: '50px' }}></div>;
}

// Parent: Holds the connection
function Room() {
  const [isLit, setIsLit] = useState(false);

  return (
    <div>
      <LightBulb isOn={isLit} />
      <LightSwitch toggle={() => setIsLit(!isLit)} />
    </div>
  );
}

export default Room;