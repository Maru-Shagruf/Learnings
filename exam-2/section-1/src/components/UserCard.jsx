import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "10px",
  },
};

export default UserCard;