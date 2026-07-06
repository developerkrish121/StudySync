import "./UpcomingTasks.css";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const tasks = [
  {
    id: 1,
    title: "Complete React Dashboard",
    due: "Today • 6:00 PM",
    completed: false,
  },
  {
    id: 2,
    title: "Solve 5 DSA Problems",
    due: "Tomorrow • 10:00 AM",
    completed: false,
  },
  {
    id: 3,
    title: "Read ML Notes",
    due: "Tomorrow • 7:00 PM",
    completed: true,
  },
  {
    id: 4,
    title: "Complete Java Assignment",
    due: "Friday • 5:00 PM",
    completed: false,
  },
];

const UpcomingTasks = () => {
  return (
    <div className="tasks">
      <div className="tasks-header">
        <h2>Upcoming Tasks</h2>
        <span>4 Tasks</span>
      </div>

      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          <div className="task-status">
            {task.completed ? (
              <FaCheckCircle className="done" />
            ) : (
              <FaRegCircle className="pending" />
            )}
          </div>

          <div className="task-info">
            <h3>{task.title}</h3>
            <p>{task.due}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingTasks;