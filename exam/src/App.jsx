import React, { useState } from "react"
import Inputt from "./components/Inputt"
import Buttonn from "./components/Buttonn"
import Formm from "./components/Formm"
import Tasks from "./components/Tasks"
function App() {
const [Name,setName]=useState("")
  return (
    <>
     <Inputt
    label="Name"
    value={Name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Enter name"
   />

  <Buttonn
    text="Save"
    variant="outlined"
    color="primary"
  />
      <br />
      <br />
      <Formm/>
      <Tasks/>
    </>
  )
}

export default App
