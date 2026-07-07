import { useState } from "react";
import "./TaskManager.css";
import TaskItem from "./TaskItem";

function TaskManager() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <section className="task-manager">
      <h2>Study Task Manager</h2>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a study task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-summary">
        <p>Total: {tasks.length}</p>
        <p>Completed: {completedTasks}</p>
        <p>Pending: {tasks.length - completedTasks}</p>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-message">
            No tasks yet. Start by adding one!
          </p>
        ) : (
          tasks.map((item) => (
            <TaskItem
              key={item.id}
              task={item}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default TaskManager;