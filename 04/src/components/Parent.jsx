import { useState } from "react";
function ColorButtons({ changeColor }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={() => changeColor("lightblue")}>Blue</button>
      <button onClick={() => changeColor("lightpink")}>Pink</button>
      <button onClick={() => changeColor("lightgreen")}>Green</button>
    </div>
  );
}

function Parent() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px", border: "1px solid black" }}>
      <h4>Background Changer</h4>
      <ColorButtons changeColor={setBgColor} />
    </div>
  );
}



export default Parent;