import { useState } from "react";
import ApiFetch from "./ApiFetch";
import Timer from "./Timer";
import SimpleOptimizedApp from "../Hooks/SimpleOptimizedApp";

function App() {
  // const [showTimer, setShowTimer] = useState(true);

  return (
    <>
    <SimpleOptimizedApp/>
    </>
    // <div style={{ padding: 30 }}>
    //   <h1>Task </h1>

    //   <ApiFetch />

    //   <hr />

    //   <button onClick={() => setShowTimer(!showTimer)} style={{ marginBottom: 10 }}>
    //     {showTimer ? "Hide Timer (Run Cleanup)" : "Show Timer"}
    //   </button>
      
    //   {showTimer && <Timer />}
    // </div>
  );
}

export default App;