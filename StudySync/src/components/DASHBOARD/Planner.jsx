import "./Planner.css";
import { FaBookOpen, FaCode, FaBrain } from "react-icons/fa";

const Planner = () => {
  const plans = [
    {
      id: 1,
      icon: <FaBookOpen />,
      title: "React Development",
      time: "09:00 AM - 11:00 AM",
    },
    {
      id: 2,
      icon: <FaCode />,
      title: "Java DSA Practice",
      time: "02:00 PM - 03:30 PM",
    },
    {
      id: 3,
      icon: <FaBrain />,
      title: "Machine Learning",
      time: "07:00 PM - 08:30 PM",
    },
  ];

  return (
    <div className="planner">
      <div className="planner-header">
        <h2>Study Planner</h2>
        <span>Today</span>
      </div>

      {plans.map((plan) => (
        <div className="plan-card" key={plan.id}>
          <div className="plan-icon">
            {plan.icon}
          </div>

          <div className="plan-info">
            <h3>{plan.title}</h3>
            <p>{plan.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Planner;