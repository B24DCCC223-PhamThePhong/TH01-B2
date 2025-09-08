import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="container">
      <h2>Danh sách công việc</h2>
      <div className="input-group">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button onClick={handleAddTask}>Thêm</button>
      </div>

      <ul className="todo-list">
        {tasks.map((t, index) => (
          <li key={index} className="todo-item">{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
