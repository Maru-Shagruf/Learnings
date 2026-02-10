import React, { useState, useRef, useMemo, useCallback } from "react";


const Item = React.memo(({ name, onDelete }) => {
  console.log("Rendering:", name);
  return (
    <li>
      {name} <button onClick={() => onDelete(name)}>X</button>
    </li>
  );
});

export default function SimpleOptimizedApp() {
  const [text, setText] = useState("");     const [query, setQuery] = useState(""); 
  const [list, setList] = useState(["Apple", "Banana", "Cherry", "Date", "Eggplant"]);

  const timer = useRef(null);
  
  const handleChange = (e) => {
    setText(e.target.value);
    
    if (timer.current) clearTimeout(timer.current); 
    
    timer.current = setTimeout(() => {
      setQuery(e.target.value); 
    }, 500);
  };


  const filteredList = useMemo(() => {
    return list.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }, [list, query]);

  const deleteItem = useCallback((nameToDelete) => {
    setList(prev => prev.filter(item => item !== nameToDelete));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <input value={text} onChange={handleChange} placeholder="Search..." />
      <ul>
        {filteredList.map(item => (
          <Item key={item} name={item} onDelete={deleteItem} />
        ))}
      </ul>
    </div>
  );
}