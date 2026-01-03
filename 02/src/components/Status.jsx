function Status() {
  const isError = false; // CHANGE THIS to 'false' to see the Green success message

  return (
    <div style={{
      padding: '15px',
      margin: '20px auto',
      maxWidth: '210px',
      backgroundColor: isError ? '#ffebee' : '#e8f5e9', 
      border: isError ? '1px solid red' : '1px solid green',
      borderRadius: '5px',
      textAlign: 'center'
    }}>
      <strong style={{ color: isError ? 'red' : 'green' }}>
        {isError ? "⚠️ Error: Something went wrong!" : "✅ Success: System is operational."}
      </strong>
    </div>
  );
}

export default Status;