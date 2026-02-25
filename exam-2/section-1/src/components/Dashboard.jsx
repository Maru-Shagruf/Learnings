import React from "react";
import UserCard from "./Usercard";
import Notification from "./Notification";

const Dashboard = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  const notificationMessage = "Welcome to your dashboard!";

  return (
    <main style={styles.dashboard}>
      <Notification message={notificationMessage} />
      <UserCard name={user.name} email={user.email} />
    </main>
  );
};

const styles = {
  dashboard: {
    padding: "20px",
  },
};

export default Dashboard;