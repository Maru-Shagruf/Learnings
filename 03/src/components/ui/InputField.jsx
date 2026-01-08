function InputField({ label, value, onChange, type = "text" }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
      />
    </div>
  );
}

export default InputField;