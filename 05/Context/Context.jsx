import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();
const AuthContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div 
        style={{ 
          minHeight: "100vh", 
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          transition: "0.3s"
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


const NavBar = () => {

  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ borderBottom: "1px solid gray", padding: "10px", display: "flex", justifyContent: "space-between" }}>
      <span>My App ({theme})</span>
      <div>
        <button onClick={toggleTheme} style={{ marginRight: 10 }}>
          {theme === "light" ? " Dark Mode" : " Light Mode"}
        </button>
        
        {user && <button onClick={logout}>Logout {user.name}</button>}
      </div>
    </nav>
  );
};

const HomeScreen = () => {
  const { user, login } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to Global State</h1>
      
      {user ? (
        <h2>Hello, {user.name}! You are logged in.</h2>
      ) : (
        <div>
          <h2>You are a Guest.</h2>
          <button onClick={() => login("Rahul")} style={{ padding: "10px 20px" }}>
            Login as Rahul
          </button>
        </div>
      )}
    </div>
  );
};


export default function Context() {
  return (

    <AuthProvider>
      <ThemeProvider>
        <NavBar />
        <HomeScreen />
      </ThemeProvider>
    </AuthProvider>
  );
}