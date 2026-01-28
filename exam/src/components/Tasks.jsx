import { useState } from 'react';

function Tasks() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [show, setShow] = useState(true); 

  const add = () => {
    setList([...list, { id: Date.now(), name: text }]);
    setText("");
  };

  const del = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  const update = (id) => {
    setList(list.map(item =>
      item.id === id ? { ...item, name: text } : item
    ));
    setEditId(null);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={add}>Add</button>


      <button onClick={() => setShow(!show)}>
        {show ? "Hide Tasks" : "Show Tasks"}
      </button>

      {show ? (
        <ul>
          {list.map(item => (
            <li key={item.id}>
              {editId === item.id ? (
                <button onClick={() => update(item.id)}>Save</button>
              ) : (
                <>
                  {item.name}
                  <button onClick={() => { setEditId(item.id); setText(item.name); }}>
                    Edit
                  </button>
                  <button onClick={() => del(item.id)}>X</button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Tasks are hidden</p>
      )}
    </div>
  );
}

export default Tasks;
