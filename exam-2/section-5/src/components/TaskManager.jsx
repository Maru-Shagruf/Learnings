import { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!text.trim()) return;

    if (editId !== null) {
      setTasks(tasks.map(t => t.id === editId ? { ...t, text } : t));
      setEditId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text }]);
    }

    setText("");
  };

  const handleEdit = (task) => {
    setText(task.text);
    setEditId(task.id);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>
        {editId !== null ? "Update" : "Add"}
      </button>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}