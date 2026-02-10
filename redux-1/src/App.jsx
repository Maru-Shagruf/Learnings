import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { store, increment, decrement, logout, fetchUser } from './store'; // Import from File 1

// --- PAGE 1: HOME ---
function Home() {
  const { count } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20, border: "2px solid green" }}>
      <h2> Home (Counter)</h2>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>➖ Minus</button>
      <button onClick={() => dispatch(increment())} style={{ marginLeft: 10 }}>➕ Plus</button>
    </div>
  );
}

// --- PAGE 2: PROFILE ---
function Profile() {
  const { user } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20, border: "2px solid blue" }}>
      <h2>👤 Profile (User)</h2>
      <h1>User: {user}</h1>
      <button onClick={() => dispatch(fetchUser())}>⬇️ Login (Fetch)</button>
      <button onClick={() => dispatch(logout())} style={{ marginLeft: 10 }}>🚪 Logout</button>
    </div>
  );
}

// --- MAIN APP ---
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{ fontFamily: "Arial", padding: 20 }}>
          <nav style={{ marginBottom: 20, padding: 10, background: "#eee" }}>
            <Link to="/" style={{ marginRight: 20 }}> Home</Link>
            <Link to="/profile"> Profile</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}