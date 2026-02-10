import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store";
import { Home, UserForm } from "./Components";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{ padding: 20, fontFamily: "sans-serif", maxWidth: 400, margin: "auto" }}>
          <h1>CRUD App</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<UserForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}