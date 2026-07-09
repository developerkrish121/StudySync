import "./TaskItem.css";
import { FaTrash, FaCheckCircle, FaEdit } from "react-icons/fa";

function TaskItem({
  task,
  deleteTask,
  toggleComplete,
  editTask,
}) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>

      <div className="task-left">

        <button
          className="complete-btn"
          onClick={() => toggleComplete(task.id)}
        >
          <FaCheckCircle />
        </button>

        <span>{task.title}</span>

      </div>

      <div className="task-actions">

        <button
          className="edit-btn"
          onClick={() => editTask(task)}
        >
          <FaEdit />
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}

export default TaskItem;