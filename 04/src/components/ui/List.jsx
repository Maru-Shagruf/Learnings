import { useState } from 'react';

function List() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (!input) return;
    const newItem = { id: Date.now(), name: input };
    setItems([...items, newItem]);
    setInput("");
  };

  const deleteItem = (idToDelete) => {
    setItems(items.filter(item => item.id !== idToDelete));
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h3>My List</h3>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} 
            <button onClick={() => deleteItem(item.id)} style={{ marginLeft: "10px" }}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;