// 3. Child (Needs the name)
function Child({ name }) {
  return <h1>Hello {name}</h1>;
}

// 2. Parent (Doesn't need name, just passes it down)
function Parent({ name }) {
  return <Child name={name} />;
}

// 1. Grandparent (Has the data)
function Grandparent() {
  const userName = "Amit";
  return <Parent name={userName} />;
}

export default Grandparent;