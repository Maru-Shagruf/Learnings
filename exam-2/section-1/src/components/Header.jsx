import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>React Dashboard</h1>
    </header>
  );
};

const styles = {
  header: {
    padding: "15px",
    backgroundColor: "#282c34",
    color: "#ffffff",
    textAlign: "center",
  },
};

export default Header;