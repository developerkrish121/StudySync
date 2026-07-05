import "./Topbar.css";
import {
  FaSearch,
  FaBell,
  FaMoon,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <header className="topbar">

      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search courses..."
        />
      </div>

      <div className="topbar-right">

        <button className="icon-btn">
          <FaBell />
        </button>

        <button className="icon-btn">
          <FaMoon />
        </button>

        <div className="profile">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
          />

          <div>
            <h4>Krishna</h4>
            <p>Student</p>
          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;