function Button({ text, onClick, variant = "primary" }) {
  const styles = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "white",
    backgroundColor: variant === "primary" ? "#007bff" : "#6c757d"
  };

  return (
    <button onClick={onClick} style={styles}>
      {text}
    </button>
  );
}

export default Button;