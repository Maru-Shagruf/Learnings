import { useState } from 'react';

function StudentManager() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  // 1. ADD
  const add = () => {
    setList([...list, { id: Date.now(), name: text }]);
    setText("");
  };

  // 2. DELETE
  const del = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  // 3. UPDATE
  const update = (id) => {
    const newList = list.map(item => {
      if (item.id === id) return { ...item, name: text };
      return item;
    });
    setList(newList);
    setEditId(null); 
    setText("");     
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            
            {editId === item.id ? (
              <button onClick={() => update(item.id)}>Save</button>
            ) : (
              <>
                {item.name}
                <button onClick={() => { setEditId(item.id); setText(item.name); }}>Edit</button>
                <button onClick={() => del(item.id)}>X</button>
              </>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentManager;