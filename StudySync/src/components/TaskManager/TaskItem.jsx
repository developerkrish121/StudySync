import "./TaskItem.css";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span>{task.text}</span>
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;