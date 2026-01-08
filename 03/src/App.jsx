import { useState } from "react";
import Button from "./components/ui/Button";
import InputField from "./components/ui/InputField";
import Modal from "./components/ui/Modal";
import Dog from "./Dog";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  return (
    <Dog/>
    // <div style={{ padding: "50px" }}>
    //   <h1>My UI Library</h1>
      
    //   <Button text="Open Login" onClick={() => setShowModal(true)} />

    //   <Modal title="Login Form" isOpen={showModal} onClose={() => setShowModal(false)}>
    //     <p>Enter your details:</p>
    //     <InputField label="Username" value={name} onChange={(e) => setName(e.target.value)} />
    //     <Button text="Submit" onClick={() => alert("Submitted: " + name)} />
    //   </Modal>
    // </div>
  );
}

export default App;