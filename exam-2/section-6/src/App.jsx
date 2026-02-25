import React from "react";
import LoginForm from "./pages/LoginForm";
import TaskManager from "./pages/TaskManager";

const App = () => {
  return (
    <div>
      <LoginForm />
      <hr />
      <TaskManager />
    </div>
  );
};

export default App;