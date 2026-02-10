import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchUsers, deleteUser, addUser, updateUser } from "./store";

export const Home = () => {
  const { list } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h2>👥 User List ({list.length})</h2>
      <button onClick={() => dispatch(fetchUsers())}>Load Sample Data</button>
      <button onClick={() => navigate("/form")} style={{ marginLeft: 10 }}>Add User</button>
      
      <ul style={{ padding: 0 }}>
        {list.map((u) => (
          <li key={u.id} style={{ border: "1px solid #ccc", margin: "10px 0", padding: 10, listStyle: "none" }}>
            <strong>{u.name}</strong> - {u.email} <br />
            <button onClick={() => navigate("/form", { state: u })}> Edit</button>
            <button onClick={() => dispatch(deleteUser(u.id))} style={{ marginLeft: 10, color: "red" }}>Delete</button>
          </li>
        ))}
      </ul>
      {list.length === 0 && <p>No users yet. Add one or load sample data.</p>}
    </div>
  );
};

export const UserForm = () => {
  const { state } = useLocation();
  const [user, setUser] = useState(state || { name: "", email: "" }); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      dispatch(updateUser(user)); 
    } else {
      dispatch(addUser(user));   
    }
    navigate("/");
  };

  return (
    <div>
      <h2>{user.id ? " Edit User" : " Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} required />
        <br /><br />
        <input placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
        <br /><br />
        <button type="submit"> Save</button>
      </form>
    </div>
  );
};