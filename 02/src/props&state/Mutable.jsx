import { useState } from 'react';

function ListAdder() {
  const [items, setItems] = useState(["Apple", "Banana"]);

  const addItem = () => {
    const newItems = [...items, "Orange"];
    setItems(newItems);
  };

  return (
    <div>
      <p>{items.join(", ")}</p>
      <button onClick={addItem}>Add Orange</button>
    </div>
  );
}

export default ListAdder;