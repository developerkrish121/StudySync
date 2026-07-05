import "./Sidebar.css";
import {
  FaHome,
  FaBook,
  FaCalendarAlt,
  FaTasks,
  FaStar,
  FaCog,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>StudySync</h2>
        <p>Learn Better</p>
      </div>

      <nav className="menu">
        <a href="#" className="menu-item active">
          <FaHome />
          <span>Dashboard</span>
        </a>

        <a href="#" className="menu-item">
          <FaBook />
          <span>Courses</span>
        </a>

        <a href="#" className="menu-item">
          <FaCalendarAlt />
          <span>Planner</span>
        </a>

        <a href="#" className="menu-item">
          <FaTasks />
          <span>Tasks</span>
        </a>

        <a href="#" className="menu-item">
          <FaStar />
          <span>Favorites</span>
        </a>

        <a href="#" className="menu-item">
          <FaCog />
          <span>Settings</span>
        </a>

        <a href="#" className="menu-item">
          <FaUser />
          <span>Profile</span>
        </a>
      </nav>

      <div className="logout">
        <a href="#" className="menu-item">
          <FaSignOutAlt />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;