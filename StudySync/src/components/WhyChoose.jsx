import "./WhyChoose.css";
import FeatureCard from "./FeatureCard";

import {
  FaBookOpen,
  FaCalendarAlt,
  FaBullseye,
  FaRobot,
  FaChartLine,
  FaUserGraduate,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      id: 1,
      icon: <FaBookOpen />,
      title: "Smart Notes",
      description:
        "Organize all your study notes in one place with quick search and easy access.",
    },
    {
      id: 2,
      icon: <FaCalendarAlt />,
      title: "Study Planner",
      description:
        "Plan your daily study schedule and stay consistent with reminders.",
    },
    {
      id: 3,
      icon: <FaBullseye />,
      title: "Goal Tracking",
      description:
        "Set learning goals and monitor your daily progress effortlessly.",
    },
    {
      id: 4,
      icon: <FaRobot />,
      title: "AI Assistant",
      description:
        "Get instant help, explanations, and study guidance whenever you need it.",
    },
    {
      id: 5,
      icon: <FaChartLine />,
      title: "Progress Analytics",
      description:
        "Visualize your learning progress with simple and interactive reports.",
    },
    {
      id: 6,
      icon: <FaUserGraduate />,
      title: "Expert Mentorship",
      description:
        "Learn from experienced mentors and receive personalized guidance.",
    },
  ];

  return (
    <section className="whychoose" id="features">
      <div className="whychoose-container">

        <div className="section-title">
          <h2>Why Choose StudySync?</h2>

          <p>
            Everything you need to study smarter, stay organized,
            and achieve your academic goals.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;