function Inputt({ value, onChange, placeholder, type = "text", label }) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default Inputt;
