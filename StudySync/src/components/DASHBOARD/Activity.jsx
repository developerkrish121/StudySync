import "./Activity.css";
import {
  FaCheckCircle,
  FaBookOpen,
  FaCode,
  FaTrophy,
} from "react-icons/fa";

const Activity = () => {
  const activities = [
    {
      id: 1,
      icon: <FaCheckCircle />,
      title: "Completed React Hooks",
      time: "2 Hours Ago",
    },
    {
      id: 2,
      icon: <FaBookOpen />,
      title: "Started Java DSA",
      time: "Yesterday",
    },
    {
      id: 3,
      icon: <FaCode />,
      title: "Solved 5 Coding Problems",
      time: "2 Days Ago",
    },
    {
      id: 4,
      icon: <FaTrophy />,
      title: "7 Day Study Streak",
      time: "This Week",
    },
  ];

  return (
    <div className="activity">
      <div className="activity-header">
        <h2>Recent Activity</h2>
        <span>View All</span>
      </div>

      {activities.map((activity) => (
        <div className="activity-card" key={activity.id}>
          <div className="activity-icon">
            {activity.icon}
          </div>

          <div className="activity-info">
            <h3>{activity.title}</h3>
            <p>{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity;