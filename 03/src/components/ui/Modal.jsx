function Modal({ title, isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <div style={{ background: "white", padding: "20px", borderRadius: "8px", minWidth: "300px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <h3>{title}</h3>
          <button onClick={onClose}>X</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;