import "./WelcomeCard.css";
import { FaArrowRight } from "react-icons/fa";

const WelcomeCard = () => {
  return (
    <div className="welcome-card">

      <div className="welcome-text">
        <h4>Welcome Back 👋</h4>
        <h1>Krishna Bansal</h1>
        <p>
          Stay consistent! Complete your daily goals and keep learning.
        </p>

        <button className="continue-btn">
          Continue Learning
          <FaArrowRight />
        </button>
      </div>

      <div className="welcome-image">
        <img
          src="https://illustrations.popsy.co/amber/digital-nomad.svg"
          alt="Learning Illustration"
        />
      </div>

    </div>
  );
};

export default WelcomeCard;