import { useState } from "react";

function Formm() {
  const [task, setTask] = useState("");
  const isValid = task.length >= 3;

  return (
    <div>
      <input
        label="Task Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      {!isValid && task && <p>Minimum 3 characters</p>}

      <button
        text="Add Task"
        onClick={() => isValid && alert("Task Added")}
        onSubmit={(e)=>(e.preventDefault,console.log(task)
        )}
      >
        add task
      </button>
    </div>
  );
}

export default Formm;
