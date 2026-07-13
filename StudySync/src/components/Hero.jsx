import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const username = "Krishna";

  const scrollToFeatures = () => {
    const section = document.getElementById("features");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      {/* Background Blur Effects */}
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <span className="hero-badge">
            🚀 Trusted by 20,000+ Students Worldwide
          </span>

          <h1>
            Learn Smarter.
            <br />
            Build Better Habits.
          </h1>

          <p>
            StudySync helps students organize notes, manage tasks,
            track study progress, and stay productive with one
            beautiful dashboard built for modern learning.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>

            <button
              className="secondary-btn"
              onClick={scrollToFeatures}
            >
              ▶ Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-card">
              <h2>20K+</h2>
              <p>Students</p>
            </div>

            <div className="stat-card">
              <h2>150+</h2>
              <p>Universities</p>
            </div>

            <div className="stat-card">
              <h2>4.9★</h2>
              <p>Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
          <div className="floating-card">
            🔥 24 Day Streak
          </div>

          <div className="dashboard">
            <div className="dashboard-header">
              <div>
                <h3>Hello {username} 👋</h3>
                <p>Let's complete today's goals.</p>
              </div>

              <div className="profile">
                KB
              </div>
            </div>

            <div className="progress-card">
              <div className="title-row">
                <span>Today's Progress</span>
                <span>82%</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>

            <div className="dashboard-stats">
              <div className="box">
                <h2>12</h2>
                <p>Tasks</p>
              </div>

              <div className="box">
                <h2>4.5h</h2>
                <p>Study</p>
              </div>

              <div className="box">
                <h2>87%</h2>
                <p>Focus</p>
              </div>
            </div>

            <div className="dashboard-courses">
              <h4>Current Courses</h4>

              <div className="dashboard-course">
                <span>📘 React Development</span>
                <span>75%</span>
              </div>

              <div className="dashboard-course">
                <span>💻 Data Structures</span>
                <span>68%</span>
              </div>

              <div className="dashboard-course">
                <span>🗄 DBMS</span>
                <span>91%</span>
              </div>
            </div>

            <div className="upcoming">
              <h4>Upcoming Session</h4>

              <div className="session">
                <div>
                  <h5>React Learning</h5>
                  <p>Today • 7:00 PM</p>
                </div>

                <button onClick={() => navigate("/login")}>
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="floating-card2">
            ⭐ Productivity Score 94%
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>

        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;