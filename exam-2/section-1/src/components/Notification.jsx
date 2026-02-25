import React from "react";

const Notification = ({ message }) => {
  return (
    <div style={styles.notification}>
        <p><b>This is the notification </b></p>
      <p>{message}</p>
    </div>
  );
};

const styles = {
  notification: {
    padding: "10px",
    backgroundColor: "#e7f3ff",
    border: "1px solid #b3d7ff",
    borderRadius: "5px",
    marginBottom: "15px",
  },
};

export default Notification;