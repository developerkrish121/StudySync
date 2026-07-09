import { useEffect, useState } from "react";
import "./TaskManager.css";
import TaskItem from "./TaskItem";
import { FaFilter } from "react-icons/fa";

function TaskManager() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

 const addTask = () => {
  if (task.trim() === "") return;

  if (editingId) {
    setTasks(
      tasks.map((t) =>
        t.id === editingId ? { ...t, title: task } : t
      )
    );

    setEditingId(null);
    setTask("");
    return;
  }

  const newTask = {
    id: Date.now(),
    title: task,
    completed: false,
  };

  setTasks([...tasks, newTask]);
  setTask("");
};

const editTask = (taskObj) => {
  setTask(taskObj.title);
  setEditingId(taskObj.id);
};


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const completed = tasks.filter((task) => task.completed).length;

  const filteredTasks = tasks.filter((task) => {
  if (filter === "completed") return task.completed;
  if (filter === "pending") return !task.completed;
  return true;
});

  return (
    <div className="task-manager">

      <h2>Study Task Manager</h2>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a study task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>
          {editingId ? "Update Task" : "Add Task"}
        </button>
      </div>

      <div className="task-stats">
        <span>Total: {tasks.length}</span>
        <span>Completed: {completed}</span>
        <span>Pending: {tasks.length - completed}</span>
      </div>

      <div className="task-filter">

    <FaFilter />

    <select
        value={filter}
        onChange={(e)=>setFilter(e.target.value)}
    >

        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>

    </select>

</div>

      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <p className="empty">
            No tasks yet. Start by adding one!
          </p>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
    key={task.id}
    task={task}
    deleteTask={deleteTask}
    toggleComplete={toggleComplete}
    editTask={editTask}
/>
          ))
        )}
      </div>

    </div>
  );
}

export default TaskManager;