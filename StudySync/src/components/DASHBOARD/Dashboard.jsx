import "./Dashboard.css";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import WelcomeCard from "./WelcomeCard";
import StatsCard from "./StatsCard";
import CourseSection from "./CourseSection";
import ProgressChart from "./ProgressChart";
import Activity from "./Activity";
import Planner from "./Planner";
import UpcomingTasks from "./UpcomingTasks";

import {
  FaBookOpen,
  FaTasks,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Topbar />

      <div className="dashboard-content">

        <WelcomeCard />

        <div className="stats-grid">
          <StatsCard
            icon={<FaBookOpen />}
            title="Courses"
            value="12"
            color="#2563eb"
          />

          <StatsCard
            icon={<FaTasks />}
            title="Pending Tasks"
            value="05"
            color="#10b981"
          />

          <StatsCard
            icon={<FaClock />}
            title="Study Hours"
            value="38h"
            color="#f59e0b"
          />

          <StatsCard
            icon={<FaChartLine />}
            title="Progress"
            value="82%"
            color="#8b5cf6"
          />
        </div>

        <CourseSection />

      <div className="dashboard-grid">

  <div className="left-section">
    <ProgressChart />
    <Activity />
    <UpcomingTasks />
  </div>

  <div className="right-section">
    <Planner />
  </div>

</div>

      </div>
    </>
  );
};

export default Dashboard;